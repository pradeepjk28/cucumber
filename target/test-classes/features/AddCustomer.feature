#Author: pradeep@your.domain.com

@cus
Feature: Add Customer flow validation
  Scenario: Add Customer
    Given user launches demo telecom application
    And user click on add customer button
    When user enters all the fields
    And user click on submit button
    Then user verify customer id is generated
    

 