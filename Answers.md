1. What problem does the context API help solve?

With context API it keeps us from prop drilling. We store the data into a Context objet and call it when we need it. No props required.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Store is the 'Single source of truth' because it holds our immutable state for us. 

Actions let you modify applications state using an action and targeting a the data from the action.

A reducer is a function which takes two arguments – the current state and an action – and returns a new, updated state object based on both arguments.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global state(?), in a sense it can be used where its needed inside the application. whereas component state is solely for that component and its children(if needed).

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk is middleware that makes the flow ansynchronous for our reducers. It allows us to make API calls from the action creators.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

Ive not yet figured out what my favorite is. While context API was easy, I feel like when I get a better grasp on redux it will take over.
