describe('parse opts', () => {
  it('Bind defaults to this when no opts are passed')
  it('Override defaults with passed opts')
  it('Handle partially-configured colors opt')
  it('Throw when opts is not an object')

  //----------------------------------------------------------
  // Typecheck opts -- numbers
  //----------------------------------------------------------
  it('Throw when delay option is not a number')
  it('Throw when indent option is not a number')

  //----------------------------------------------------------
  // Typecheck opts -- strings
  //----------------------------------------------------------
  it('Throw when errorIndicator option is not a string')
  it('Throw when succesIndicator option is not a string')

  //----------------------------------------------------------
  // Typecheck opts -- colors
  //----------------------------------------------------------
  it('Throw when colors option is not an object')
  it('Throw when color is assigned to nonexistant state')

  //----------------------------------------------------------
  // Typecheck opts -- frames
  //----------------------------------------------------------
  it('Throw when frames option is not an array of strings')
})