describe('add product to cart', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should be possible to navigate to the product page and add it to the cart', () => {
    cy.get('a[href^="product"]').first().click()

    cy.location('pathname').should('include', '/product')
    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })

  it('should not count duplicated products in cart', () => {
    cy.get('a[href^="product"]').first().click()

    cy.location('pathname').should('include', '/product')

    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })

  it('should be able to seach for a product and add to a cart', () => {
    cy.searchByQuery('moletom')

    cy.get('a[href^="product"]').first().click()

    cy.location('pathname').should('include', '/product')

    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })
})
