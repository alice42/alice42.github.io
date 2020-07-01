import React, { Component } from 'react'
import theme from '../../theme'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'
import Article from './Article'
import { Grid } from '@material-ui/core'
import { StyledPaper } from './styles/StyledContent'
import Pagination from '@material-ui/lab/Pagination'
import { useHistory } from 'react-router-dom'

class Search extends Component {
  render() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <StyledPaper>
            <h2>Find Articles</h2>
            <TextField
              type="text"
              name="search"
              id="search"
              placeholder="search"
              value={this.props.search}
              onChange={e => {
                this.props.handleChange(e)
              }}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              autoComplete="search"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              palette={theme.palette}
              themespacing={theme.spacing(3, 0, 2)}
              onClick={() => this.props.handleSubmitSearch()}
            >
              Go!
            </Button>
            {this.props.articlesSearch && (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                {this.props.totalArticlesSearch > 0 ? (
                  <div>
                    Total Results:{' '}
                    {this.props.totalArticlesSearch > 100
                      ? 100
                      : this.props.totalArticlesSearch}
                  </div>
                ) : (
                  <div> No Results, try something else</div>
                )}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                  }}
                >
                  {this.props.articlesSearch.map((article, index) => {
                    return (
                      <Article
                        key={`article_${index}`}
                        article={article}
                        handleHideArticle={this.props.handleHideArticle}
                      />
                    )
                  })}
                </div>
                {this.props.totalArticlesSearch > 0 && (
                  <Pagination
                    page={Number(this.props.page)}
                    count={
                      Math.round(this.props.totalArticlesSearch / 20) >= 5
                        ? 5
                        : Math.ceil(this.props.totalArticlesSearch / 20)
                    }
                    onChange={this.props.handleChangePage}
                  />
                )}
              </div>
            )}
          </StyledPaper>
        </Grid>
      </Grid>
    )
  }
}

export default Search