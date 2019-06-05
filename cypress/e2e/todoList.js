/* globals cy */
describe('todolist', () => {
  it('can visit the app', () => {
    cy.visit('/')
      .getByTestId('task-button')
      .should('exist')
      .click()
      .getByTestId('task-name')
      .should('contain', 'X')
  })
})
