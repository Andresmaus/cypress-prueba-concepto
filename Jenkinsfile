pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Install dependencies') {
      steps {
        sh 'npm install --save-dev'
      }
    }
    stage('Run tests') {
      steps {
        sh 'npm run cypress:execution'
      }
      post{
        steps {
        sh 'node ./cucumber-html.report.js'
      }
      post {
        always {
          junit 'cypress/results/cypress-junit.xml'
          archiveArtifacts 'cypress/screenshots/**'
        }
      }      
      }
    }
  }
}
