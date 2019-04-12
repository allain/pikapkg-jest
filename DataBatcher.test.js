const DataBatcher = require('./DataBatcher')

describe('DataBatcher', () => {
  it('can be created', () => {
    const loader = async keys => keys
    const saver = async writes => writes.map(_ => undefined)

    const batcher = new DataBatcher(loader, saver)
    expect(batcher).toBeInstanceOf(DataBatcher)
  })
})
