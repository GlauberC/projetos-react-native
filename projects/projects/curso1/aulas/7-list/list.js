import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    FlatList, // Lista mais simples que o scrollview, porém os elementos fora da tela não são criados até que esteja em tela
    SectionList // Mesma coisa da flat list, porém ela é mais elaborada 
} from 'react-native'

import Post from './post'

export default class List extends Component{
    render(){
        const posts = require('./posts')
        return(
            <View style = {styles.container}>
                <View style = {styles.headerFooter}></View>
                <View style = {styles.scrollContainer}>


                    {/* <ScrollView>
                        {posts.map(post => <Post key = {post._id} name = {post.name} msg = {post.msg} />)}
                    </ScrollView> */}
                    

                    
                    {/* <FlatList 
                        data = {[
                            {key: 'Javascript'},
                            {key: 'Java'},
                            {key: 'Python'},
                            {key: 'C++'},
                            {key: 'Ruby'},
                            {key: 'C'},
                            {key: 'C#'},
                            {key: 'Cobol'},
                            {key: 'React'},
                            {key: 'Flask'},
                            {key: 'Spring'},
                            {key: 'Angular'},
                            {key: 'React-native'},
                            {key: 'Ionic'},
                            {key: 'Elektron'},
                            {key: 'Django'},
                            {key: 'Pandas'},
                            {key: 'Numpy'},
                        ]}
                        renderItem={({item}) => <Text style = {styles.listText}>{item.key}</Text>}
                    /> */}

                    <SectionList 
                        sections = {[
                            { title: 'Linguagens', data: [ 'Javascript',  'Java',  'Python',  'C++',  'Ruby',  'C',  'C#',  'Cobol']},
                            { title: 'Libs/Frameworks', data: [ 'React',  'Flask',  'Spring',  'Angular',  'React-native',  'Ionic',  'Elektron',  'Django',  'Pandas',  'Numpy']}
                        ]}
                        renderItem = {({item}) => <Text style = {styles.listText}>{item}</Text>}
                        renderSectionHeader = {({section}) => <Text style = {styles.sectionText}>{section.title}</Text>}
                        keyExtractor = {(item, index) => index}
                    />

                </View>
                <View style = {styles.headerFooter}></View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerFooter: {
        flex: 1
    },
    scrollContainer:{
        flex: 6
    },
    listText: {
        fontSize: 40,
        color: '#d3d3d3',
        marginLeft: 20
    },
    sectionText:{
        fontSize: 50,
        color: 'black',
        fontWeight: 'bold',
        marginTop: 20,
    }


})