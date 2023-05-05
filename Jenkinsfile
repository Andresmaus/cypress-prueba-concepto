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
        //bat => sh
        bat "npm install"
        bat "npm install cypress"
        bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
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
      bat(script: 'node ./cucumber-html.report.js')
      publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'reports\cucumber-htmlreport.html', reportFiles: 'index.html', reportName: 'Evidencia Cypress HTML', reportTitles: 'Evidencia Ejecucion', useWrapperFileDirectly: true])
      //publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'reports', reportFiles: 'index.html', reportName: 'Evidencia Reporte', reportTitles: 'Evidencia Ejecucion', useWrapperFileDirectly: true])
      //publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/videos', reportFiles: 'cypress.mp4', reportName: 'Video Reporte', reportTitles: 'Video Evidencia', useWrapperFileDirectly: true])
    }
  }
}
