FROM openjdk:17.0.2-jdk

WORKDIR /code
COPY target/*.jar app.jar
EXPOSE 8761
ENTRYPOINT ["java","-jar","/code/app.jar"]