describe('Orange HRM Test', () => {
  it('sucessful login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('admin123')
    cy.get('.oxd-button').click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get('.oxd-text.oxd-topbar-header-breadcrumb-module').contains('Dashboard')
  })
  it('fail login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Atestdmin')
    cy.get("[name='password']").type('admintest123')
    cy.get("[type='submit']").click()
  
  })
})