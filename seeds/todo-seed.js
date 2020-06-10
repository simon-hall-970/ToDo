exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('todo').del()
      .then(function () {
        // Then inserts seed entries
        return knex('todo').insert([
          {id: 1, task: 'Design database', description: '', priority: 1, completed: true},
          {id: 2, task: 'Build migrations and seed data', description: '', priority: 2, completed: true},
          {id: 3, task: 'Build an API to list add update and delete', description: '', priority: 3, completed: false},
          {id: 4, task: 'Test API with Postman/Insomnia', description: '', priority: 1, completed: false},
          {id: 5, task: 'Build React components from static html', description: '', priority: 2, completed: false},
          {id: 6, task: 'Design Redux Global State', description: '', priority: 3, completed: false},
          {id: 7, task: 'Build Redux Reducers (hard-code static data as initial state', description: '', priority: 1, completed: false},
          {id: 8, task: 'Build API client', description: '', priority: 2, completed: false},
          {id: 9, task: 'Build Thunk actions to get task from API', description: '', priority: 2, completed: false},
          {id: 10, task: 'Build Redux Actions to save task data from the API (remove hard coded initial state)', description: '', priority: 3, completed: false}
        ]);
      });
  };