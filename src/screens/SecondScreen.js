import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDummyDataDispatcher } from './dispatcher'

class SecondScreen extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.getDummyDataDispatcher({ "name": "Nagesh" })
    }
    render() {
        console.log(this.props.dummyData)
        return (
            <View>
                <Text>Hi</Text>
            </View>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {

        dummyData: state.mainReducer
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({ getDummyDataDispatcher, }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondScreen)
