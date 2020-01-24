1. What problem does the context API help solve?
   Context API helps to provide peices of state at various levels through the component tree without prop-drilling

1) In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are functions that perform a task
Reducers are conditional statements that call those functions
The Store is a centralized location of state. It keeps state as it was, and holds it in an immutable fashion

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application State is a GLOBAL repository of state, whereas Component state lives on the component. If you have peices of data that may be needed throughout multiple componetens, you want to use Application State, whereas if you have, say, just a form that you need to handle the changes for, a simple Component state would suffice

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
   Thunk allows us to curry functions together, in our reducers, allowing us to dispatch actions asynchronously

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Context API has got to be my favorite, because of it's ease of use. I'm sure over time I can get used to Redux, but right now.. I despise it.
