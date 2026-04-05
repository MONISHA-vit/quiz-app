pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                git branch: 'v1',
                url: 'https://github.com/MONISHA-vit/quiz-app.git'
            }
        }

        stage('Check Files') {
            steps {
                bat 'dir'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t quiz-app:v1 .'
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker run -d -p 3001:3000 quiz-app:v1'
            }
        }

    }
}
