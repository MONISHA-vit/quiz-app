pipeline {
    agent any

    parameters {
        string(name: 'VERSION', defaultValue: 'v1', description: 'Enter version: v1, v2, v3')
    }

    stages {

        stage('Clone Code') {
            steps {
                git branch: "${params.VERSION}", url: 'https://github.com/MONISHA-vit/quiz-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t quiz-app:${params.VERSION} ."
            }
        }
        stage('Check Docker') {
    steps {
        bat 'where docker'
        bat 'docker --version'
    }
}

        stage('Run Container') {
            steps {
                script {
                    if (params.VERSION == 'v1') {
                        sh 'docker run -d -p 3001:3000 quiz-app:v1'
                    } else if (params.VERSION == 'v2') {
                        sh 'docker run -d -p 3002:3000 quiz-app:v2'
                    } else if (params.VERSION == 'v3') {
                        sh 'docker run -d -p 3003:3000 quiz-app:v3'
                    }
                }
            }
        }
    }
}
