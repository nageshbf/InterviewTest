import React from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDummyDataDispatcher } from './dispatcher';
import axios from 'axios';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postList: []
        }

    }


    async fetchUserDetails(post) {
        
        await axios.get('https://dummyjson.com/users/' + post.userId)
            .then((response) => {
                // handle success
                if (response?.data?.posts) {
                    this.setState({
                        postList: response.data.posts
                    })
                }
                console.log(JSON.stringify(response));
            })
            .then(function () {
                // always executed
            });

      post.username = ""


      // 1. First Will get post object
         2. Contain user ID
         3. Call API using user ID
         4. Add username key postobje
         5. Maintain seperate array push object
         6. let postsWithUserDetails = [{
            "9" : {

            }[{"9" : {
        "id": 1,
        "title": "His mother had always taught him",
        "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
        "userId": 9,
        "tags": [
          "history",
          "american",
          "crime"
        ],
        "reactions": 2,
        use
      }}]
         }]

      
      [{"9" : {
        "id": 1,
        "title": "His mother had always taught him",
        "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
        "userId": 9,
        "tags": [
          "history",
          "american",
          "crime"
        ],
        "reactions": 2,
        use
      }}]

    }

    // post title & username
    componentDidMount() {

        axios.get('https://dummyjson.com/posts')
            .then((response) => {
                // handle success
                if (response?.data?.posts) {
                    let posts = response.data.posts
                    let length = Object.keys(posts).length


                    for (let i = 0; i < length; i++) {
                        this.fetchUserDetails(posts[i])
                    }
                }
                console.log(JSON.stringify(response));
            })
            .then(function () {
                // always executed
            });

    }
    render() {
        let { postList } = this.state

        return (
            <View style={{ ...styles.container }}>
                <ScrollView>

                    {
                        postList.map((records, index) => {

                            return <View style={{ ...styles.card }} key={records.id}>
                                <Text>{records.title}</Text>
                                <Text>{records.userId}</Text>
                            </View>
                        })
                    }


                </ScrollView>


            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    card: {
        marginVertical: 20,
        marginHorizontal: 10
    }
})
const mapStateToProps = (state, ownProps) => {
    return {

        dummyData: state.mainReducer
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({ getDummyDataDispatcher, }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
