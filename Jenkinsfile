pipeline {
  agent any

  parameters{
    string(
      name: "SPEC",defaultValue: "cypress/e2e/feature/*.feature", description: "Ejemplo: cypress/e2e/features/*.feature  || cypress/e2e/features/*folder*/*.feature")
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
        bat "npx cypress install"
        bat "npm run cypress:execution"
        //bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
      }
    }
    stage('Deploy'){
      steps{
        echo "Deploying the applications"
      }
    }
    post{
        always {
          bat(script: 'node ./cucumber-html.report.js')
          publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'reports/cucumber-htmlreport.html', reportFiles: 'index.html', reportName: 'Evidencia Cypress HTML', reportTitles: 'Evidencia Ejecucion', useWrapperFileDirectly: true])
          //publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/videos', reportFiles: 'cypress.mp4', reportName: 'Video Reporte', reportTitles: 'Evidencia Video Cypress', useWrapperFileDirectly: true])
          //publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/videos', reportFiles: 'cypress_grabacion.mp4', reportName: 'Video Reporte', reportTitles: 'Evidencia Video Cypress', useWrapperFileDirectly: true])
      
        }
    }
  }  
}
