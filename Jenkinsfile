pipeline {
  agent any
  environment { 
  DOCKERHUB_CREDENTIALS = credentials('docker-hub-test')
  DOCKERFILE = credentials('dockerfile')
  DOCKERCOMPOSE = credentials('docker-compose')
  }
  stages {
    stage('push docker image in docker hub') {
      steps{
        sh 'touch Dockerfile && cat $DOCKERFILE > Dockerfile'
        sh 'touch docker-compose.yml && cat $DOCKERCOMPOSE > docker-compose.yml'
        sh 'docker build -t ka1va/jenkins_test:123'
        sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
        sh 'docker push ka1va/jenkins_test:123'
      }
    }
    stage('add ssh_key') {
      steps {
        withCredentials([string(credentialsId: 'host_user', variable: 'SSH_USER'),string(credentialsId: 'ssh_host', variable: 'SSH_HOST')]) {
        sshagent(credentials : ['aws_key_ed']) {
            sh 'ssh -o StrictHostKeyChecking=no $SSH_USER@$SSH_HOST "echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin"'
            sh 'ssh -o StrictHostKeyChecking=no $SSH_USER@$SSH_HOST "docker pull ka1va/jenkins_test:latest"'
            sh 'ssh -o StrictHostKeyChecking=no $SSH_USER@$SSH_HOST "cd ~/workspace && docker run -d -p 80:80 ka1va/jenkins_test:latest"'
            sh 'ssh -o StrictHostKeyChecking=no $SSH_USER@$SSH_HOST "docker logout"'
            sh 'ssh -o StrictHostKeyChecking=no $SSH_USER@$SSH_HOST "docker image prune -af && yes | docker system prune"'
            }   
          }
        }
      }
   }
}
