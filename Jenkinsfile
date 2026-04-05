pipeline {
    agent any

    stages {
        stage('Checkout SCM') {
            steps {
                git branch: 'v2', url: 'https://github.com/MONISHA-vit/quiz-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t quiz-app:v2 .'
            }
        }

        stage('Run Docker Container') {
            steps {
                bat 'docker run -d -p 3002:3000 quiz-app:v2'
            }
        }

        stage('Push to DockerHub') {
            steps {
                bat 'docker tag quiz-app:v2 MONISHA-vit/quiz-app:v2'
                bat 'docker push MONISHA-vit/quiz-app:v2'
            }
        }
    }
}
