pipeline {
  agent any
  stages {
    stage('add ssh_key') {
      steps {
        sshagent(credentials : ['aws_key_ed']) {
            sh 'ssh -o StrictHostKeyChecking=no ubuntu@54.193.204.29 "pwd"'
            sh 'ssh -o StrictHostKeyChecking=no ubuntu@54.193.204.29 "whoami"'

        }
        }
      }
   }
}
