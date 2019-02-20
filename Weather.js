import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const weatherCases = {
    Rain: {
        colors:['#00C6FB', '#005BEA'],
        title: '비가 오니 우산을 꼭 챙기세요',
        subtitle: 'For more info look outside',
        icon: 'weather-pouring'
    },
    Clear: {
        colors:['#FEF253', '#FF7300'],
        title: '오늘은 구름 한 점 없이 맑아요',
        subtitle: '나들이 하기 좋은 날씨에요',
        icon: 'weather-sunny'
    },
    Thunderstorm: {
        colors:['#dcdde1', '#e1b12c'],
        title: '마른 하늘에 날벼락이에요',
        subtitle: '밖에 나가지 않는게 좋겠어요',
        icon: 'weather-lightning'
    },
    Clouds: {
        colors:['#D7D2CC', '#304352'],
        title: '흐림',
        subtitle: '지루한 하루에요',
        icon: 'weather-cloudy'
    },
    Snow: {
        colors:['#7de2fc', '#b9b6e5'],
        title: '오늘은 정말 추워요',
        subtitle: '나랑 눈사람 만들래? 아니',
        icon: 'weather-snowy'
    },
    Drizzle: {
        colors:['#89F7FE', '#66A6FF'],
        title: '부슬비가 내려요',
        subtitle: '비라고 착각하면 안돼요 💦',
        icon: 'weather-hail'
    },
    Haze: {
        colors:['#D7D2CC', '#636e72'],
        title: '안개가 짖어요',
        subtitle: '앞이 안보이겠죠 💦',
        icon: 'weather-fog'
    },
    Mist: {
        colors:['#89F7FE', '#007ADF'],
        title: '부슬비가 내려요',
        subtitle: 'Its like you have no glasses on',
        icon: 'weather-hail'
    }
}

function Weather({ weatherName, temp }) {
    return(
        <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
            <View style={styles.upper}>
                <MaterialCommunityIcons
                    color='white'
                    size={130}
                    name={weatherCases[weatherName].icon}
                />
                <Text style={styles.temp}>{temp}℃</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
}

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    temp: {
        fontSize: 38,
        color: 'white'
    },
    lower: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 30
    },
    title: {
        fontSize: 30,
        color: 'white',
        marginBottom: 10,
        fontWeight: '300'
    },
    subtitle: {
        fontSize: 20,
        color: 'white',
        marginBottom: 50
    }
})