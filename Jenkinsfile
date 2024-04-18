pipeline {
  agent any
  environment { 
  DOCKERHUB_CREDENTIALS = credentials('docker-hub-test')
  }
  stages {
    stage('add ssh_key') {
      steps {
        withCredentials([string(credentialsId: 'host_user', variable: 'SSH_USER'),string(credentialsId: 'ssh_host', variable: 'SSH_HOST')]) {
        sshagent(credentials : ['aws_key_ed']) {
            sh 'ssh -o StrictHostKeyChecking=no $SSH_USER@$SSH_HOST "docker stop $(docker ps -a -q) | docker rm $(docker ps -a -q) | docker rmi $(docker images -q)"'
            sh 'ssh -o StrictHostKeyChecking=no $SSH_USER@$SSH_HOST "echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin"'
            sh 'ssh -o StrictHostKeyChecking=no $SSH_USER@$SSH_HOST "docker pull ka1va/jenkins_test:latest"'
            sh 'ssh -o StrictHostKeyChecking=no $SSH_USER@$SSH_HOST "cd ~/workspace && docker run -d -p 80:80 ka1va/jenkins_test:latest"'
            sh 'ssh -o StrictHostKeyChecking=no $SSH_USER@$SSH_HOST "docker logout"'
            sh 'ssh -o StrictHostKeyChecking=no $SSH_USER@$SSH_HOST "sleep 150 && yes | docker image prune -af && yes | docker system prune"'
            }   
          }
        }
      }
   }
}
