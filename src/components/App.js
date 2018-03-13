import React from 'react';
import { connect } from 'react-redux';

import Form from './Form';
import Itemlist from './ItemList';

class App extends React.Component {

  render() {
    return (
      <div>
        <h1>Liste de courses</h1>
        <div>
          < Form formTitle="Ajouter des articles à acheter" addArticle={this.props.addArticle} />
          <br />
          <hr />
          < Itemlist articles={this.props.articles}
            removeArticle={this.props.removeArticle}
            editArticle={this.props.editArticle}
          />
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    articles: state.articles
  };
};


const addArticleActionCreator = (article) => {
  return {
    type: 'ADD_ARTICLE',
    payload: article
  }
}

const removeArticleActionCreator = (articleId) => {
  return {
    type: 'REMOVE_ARTICLE',
    payload: articleId
  }
}

const editArticleActionCreator = (article) => {
  return {
    type: 'EDIT_ARTICLE',
    payload: article
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addArticle: (article) => {
      dispatch(addArticleActionCreator(article));
    },
    removeArticle: (articleId) => {
      dispatch(removeArticleActionCreator(articleId));
    },
    editArticle: (article) => {
      dispatch(editArticleActionCreator(article));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
