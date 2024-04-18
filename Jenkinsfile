pipeline {
  agent any
  environment { 
  DOCKERHUB_CREDENTIALS = credentials('fusion-docker-token')
  }
  stages {
    stage('add ssh_key') {
      steps {
        sshagent(credentials : ['aws_key_ed']) {
            sh 'ssh -o StrictHostKeyChecking=no ubuntu@54.193.204.29 "echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin"'
            sh 'ssh -o StrictHostKeyChecking=no ubuntu@54.193.204.29 "docker pull ka1va/jenkins_test:latest"'
            sh 'ssh -o StrictHostKeyChecking=no ubuntu@54.193.204.29 "cd ~/workspace && docker run -d -p 80:80 ka1va/jenkins_test:latest"'
        }
        }
      }
   }
}
