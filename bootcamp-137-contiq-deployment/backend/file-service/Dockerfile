FROM openjdk:17.0.2-jdk

WORKDIR /code
COPY target/*.jar app.jar
EXPOSE 9002
ENTRYPOINT ["java","-jar","/code/app.jar"]