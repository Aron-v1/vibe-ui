# Kubernetes Deployment

Kubernetes manifests for deploying the GOV Route Library application.

## Files

- **deployment.yaml**: Deployment configuration with 3 replicas
- **service.yaml**: ClusterIP service exposing port 80
- **configmap.yaml**: Configuration for environment variables
- **kustomization.yaml**: Kustomize configuration for easier management

## Prerequisites

1. Build the Docker image:
   ```bash
   docker build -t gov-route-library:latest .
   ```

2. If using a container registry, tag and push:
   ```bash
   docker tag gov-route-library:latest <registry>/gov-route-library:latest
   docker push <registry>/gov-route-library:latest
   ```

3. Update the image reference in `deployment.yaml` if using a registry.

## Deployment

### Using kubectl directly

```bash
kubectl apply -f k8s/configmap.yaml
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
```

### Using Kustomize

```bash
kubectl apply -k k8s/
```

## Configuration

Edit `configmap.yaml` to configure:

- **enable-filters**: Set to `"true"` to enable filters on results page
- **search-api-url**: Backend search API URL (leave empty to use built-in mock API)

After editing the ConfigMap, apply changes and restart pods:

```bash
kubectl apply -f k8s/configmap.yaml
kubectl rollout restart deployment/gov-route-library
```

## Accessing the Application

### Port Forward (for testing)

```bash
kubectl port-forward service/gov-route-library 8080:80
```

Then access at http://localhost:8080

### Ingress (for production)

Create an Ingress resource to expose the service:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: gov-route-library
  annotations:
    cert-manager.io/cluster-issuer: letsencrypt-prod
spec:
  ingressClassName: nginx
  tls:
  - hosts:
    - gov-route-library.example.gov.uk
    secretName: gov-route-library-tls
  rules:
  - host: gov-route-library.example.gov.uk
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: gov-route-library
            port:
              number: 80
```

## Monitoring

Check deployment status:

```bash
kubectl get deployments
kubectl get pods -l app=gov-route-library
kubectl get service gov-route-library
```

View logs:

```bash
kubectl logs -l app=gov-route-library -f
```

## Scaling

Scale the deployment:

```bash
kubectl scale deployment/gov-route-library --replicas=5
```

## Security Features

- Runs as non-root user (UID 1001)
- No privilege escalation
- Drops all capabilities
- Uses seccomp profile
- Health checks configured (liveness and readiness probes)

## Resource Limits

Default limits per pod:
- Memory: 256Mi request, 512Mi limit
- CPU: 100m request, 500m limit

Adjust in `deployment.yaml` based on your needs.
