pipeline {
  agent any
  stages {
    stage('checkout') {
      steps {
        git(url: 'https://github.com/badis-beji/CRMapp.git', branch: 'mainn')
      }
    }

    stage('logging something') {
      steps {
        sh 'ls -la'
      }
    }

    stage('building a docker image') {
      steps {
        sh 'docker build --tag badisbeji/crm_angular_app .'
      }
    }

    stage('connecting to DockerHub') {
      environment {
        DOCKER_USER = 'badisbeji'
      }
      steps {
        withCredentials([string(credentialsId: 'DOCKER_PASS', variable: 'DOCKER_PASS')]) {
        sh 'docker login -u ${DOCKER_USER} -p $DOCKER_PASS'}
      }
    }

    stage('pushing into DockerHub') {
      steps {
        sh 'docker push badisbeji/crm_angular_app'
      }
    }

  }
}