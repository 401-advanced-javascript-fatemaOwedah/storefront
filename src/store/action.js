import superagent from 'superagent';

let api = 'https://api401-todo.herokuapp.com/product';


export const getData = () => dispatch => {
   return superagent.get(api)
      .then(data => {
         dispatch(getAction(data.body))
      });
}
export const getAction = payload => {
   return {
      type: 'get',
      payload: payload
   }
}
export const addData = (data) => async dispatch => {
   data.quantity = 1;
   return superagent.post(api)
      .send(data)
      .set('X-API-Key', 'foobar')
      .set('Accept', 'application/json')
      .then(res => {
         dispatch(addAction(res.body))
      });
}
export const addAction = payload => {
   return {
      type: 'post',
      payload: payload
   }
}
export const deleteData = (id) => async dispatch => {
   return superagent.delete(`${api}/${id}`)
      .set('X-API-Key', 'foobar')
      .set('Accept', 'application/json')
      .then(res => {
         dispatch(deleteAction(res.body))
      })
}
export const deleteAction = payload => {
   return {
      type: 'delete',
      payload: payload
   }
}
export const updateData = (id, data, change) => async dispatch => {
   data.quantity = change;
   console.log('data in update==>', data);
   return superagent.put(`${api}/${id}`)
      .send(data)
      .set('X-API-Key', 'foobar')
      .set('Accept', 'application/json')
      .then(res => {
         dispatch(updateAction(res.body))
      })
}
export const updateAction = payload => {
   return {
      type: 'update',
      payload: payload
   }
}