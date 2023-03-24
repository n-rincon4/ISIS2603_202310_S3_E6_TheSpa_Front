pipeline {
    agent any
    environment {
       GIT_REPO = 'ISIS2603_202310_S3_E6_TheSpa_Front'
       GIT_CREDENTIAL_ID = 'de5cd571-10da-4034-8ba8-af99beef4b14'
       SONARQUBE_URL = 'http://172.24.100.52:8082/sonar-isis2603'
    }
    stages {
       stage('Checkout') {
          steps {
             scmSkip(deleteBuild: true, skipPattern:'.*\\[ci-skip\\].*')
             git branch: 'master',
                credentialsId: env.GIT_CREDENTIAL_ID,
                url: 'https://github.com/Uniandes-isis2603/' + env.GIT_REPO
          }
       }
       stage('Build') {
          // Build app
          steps {
             script {
                docker.image('citools-isis2603:latest').inside('-u root') {
                   sh '''
                      CYPRESS_INSTALL_BINARY=0 npm install
                      npm i -s
                      npm i typescript@4.6.2
                      ng build
                   '''
                }
             }
          }
       }
      stage('Test') {
          steps {
             script {
                docker.image('citools-isis2603:latest').inside('-u root') {
                  sh '''
                    ng test --watch=false --code-coverage true
                    npm run sonar
                  '''
                }
             }
          }
       }
       stage('Static Analysis') {
          // Run static analysis
          steps {
             sh '''
                docker run --rm -u root -e SONAR_HOST_URL=${SONARQUBE_URL} -v ${WORKSPACE}:/usr/src sonarsource/sonar-scanner-cli:4.3
             '''
          }
       }
    }
    post {
      always {
         // Clean workspace
         cleanWs(cleanWhenNotBuilt: false,
            deleteDirs: true,
            disableDeferredWipeout: true,
            notFailBuild: true,
            patterns: [[pattern: '.gitignore', type: 'INCLUDE'],
                       [pattern: '.propsfile', type: 'EXCLUDE']])
      }
    }
  }
  