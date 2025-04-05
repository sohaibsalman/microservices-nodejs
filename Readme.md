# Microservices using Node JS

### Kubernetes Concepts / Terminologies

- Kubernetes Cluster -> A collection of nodes + a master to manage them
- Node --> Like a VM
- Pods --> Hosts and runs the containers (they can run multiple containers)
- Deployment --> Manages the pods -- Monitors a set of pods, making sure they are running and restarts them if they crash
- Services --> Used for networking between Pods -- Provides an easy to remember URL to access a running container

#### Common Kubernetes Commands

Pod Related Commands

- `kubectl get pods` --> Prints out info about all running pods
- `kubectl exec -t [pod_name] [-- cmd]` --> Executes the given command in the running pod
- `kubectl logs [pod_name]` --> Prints out logs from the pod
- `kubectl delete pod [pod_name]` --> Deletes the pod
- `kubectl apply -f [config_file_name]` --> Tells kubernetes to process the config
- `kubectl describe pod [pod_name]` --> Prints info about running pod

Deployment Related Commands

- `kubectl get deployments` --> Prints out info about all running pods
- `kubectl describe deployments [depl_name]` --> Prints info about specific deployment
- `kubectl apply -f [config_file_name]` --> Tells kubernetes to process the config
- `kubectl delete deployments [depl_name]` --> Deletes the pod
- `kubectl rollout restart deployment [depl_name]` --> Restarts and Updates the deployment
