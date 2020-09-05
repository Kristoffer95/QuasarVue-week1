export interface ExampleStateInterface {
  folder: Array<object>;
}

const state: ExampleStateInterface = {
  folder: [
    {
      title: 'folder 1',
      data: ['data 1', 'data 2', 'data 3']
    },
    {
      title: 'folder 2',
      data: ['data 1', 'data 2', 'data 3']
    },
    {
      title: 'folder 3',
      data: ['data 1', 'data 2', 'data 3']
    }
  ]
}

export default state
