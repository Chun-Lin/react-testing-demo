/* globals cy */
describe('todolist', () => {
  it('can visit the app', () => {
    cy.visit('/')
      .getByTestId('task-button')
      .should('exist')
      .click()
      .wait(500)
      .getByTestId('task-name')
      .should('contain', 'X')
      .wait(500)
  })
})
