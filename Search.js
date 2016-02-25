'use strict';
import React, {
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Search extends Component {
	render(){
		return(
			<View>
				<Text>
					Featured Tab
				</Text>
			</View>
			)
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	description:{
		fontSize: 20,
		backgroundColor: 'white',
	}
});

module.exports = Search;