Feature: Handle errors and accurately describe to user and developer 
  In order to value this application and be able to easily debug 
  As a developer 
  I want feature correct error message 

  Scenario: users has wrong password
    Given that the user has the wrong password, the backend will always return an object with status code 404 {error: "", error_location: ""}
    When
    Then

  Scenario: user does not exist for login 
     Given that the user has not signed up yet
    When 
    Then

  Scenario: user already exists for signup 
    Given
    When
    Then
