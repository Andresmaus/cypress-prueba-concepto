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
        echo "Compilando aplicacion"
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
      sh(script: 'node ./cucumber-html.report.js')
      publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'reports', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
      publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/videos', reportFiles: 'cypress.mp4', reportName: 'Video Reporte', reportTitles: 'Video Evidencia', useWrapperFileDirectly: true])
    }
  }
}
