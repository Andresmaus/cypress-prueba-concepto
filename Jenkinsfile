pipeline {
  agent any

  parameters{
    string(
      name: "SPEC",defaultValue: "cypress/e2e/**/**", description: "Ejemplo: cypress/e2e/features/*.feature")
    choice(name: "BROWSER", choices: ['chrome', "edge"], description: "Escoja un browser donde correr la prueba")
  }
  
  options{
    ansiColor('xterm')
  }

  stages{
    stage('Build'){
      steps{
        echo "Buiding application "
      }
    }
    stage('Testing'){
      steps{
        sh "npm install"
        sh "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
      }
    }
    stage('Deploy'){
      steps{
        echo "Deploying the applications"
      }
    }
  }
  post{
    always {
      sh 'node ./cucumber-html.report.js',
      publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'reports', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
    }
  }
}
