import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity
} from 'react-native';
import TEMP_QUESTIONS from '../data/computers';
import { Button, ButtonContainer } from '../components/Button';
import { Alert } from '../components/Alert';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#36B1F0',
    flex: 1,
    paddingHorizontal: 20
  },
  text: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    letterSpacing: -0.02,
    fontWeight: '600'
  },
  safearea: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'space-between'
  },
  imageSize: {
    width: 250,
    height: 250,
    marginTop: 40,
    alignItems: 'center'
  },
  ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: 100,
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#fff'
  }
});

class Quiz extends React.Component {
  state = {
    correctCount: this.props.navigation.getParam('resetCount'),
    totalCount: TEMP_QUESTIONS.length,
    activeQuestionIndex: this.props.navigation.getParam('resetAQ'),
    answerCorrect: false,
    answered: false
  };

  answer = (correct, answered, prev) => {
    this.setState(
      state => {
        const nextState = {};
        if (answered) {
          nextState.answered = true;
          if (correct) {
            nextState.correctCount = state.correctCount + 1;
            nextState.answerCorrect = true;
          } else {
            nextState.answerCorrect = false;
          }
        } else {
          nextState.answered = false;
          nextState.answerCorrect = false;
        }

        return nextState;
      },
      () => {
        if (prev) {
          setTimeout(() => this.nextQuestion(true), 750);
        } else {
          setTimeout(() => this.nextQuestion(false), 750);
        }
      }
    );
  };

  nextQuestion = prev => {
    this.setState(state => {
      let nextIndex;
      if (prev) {
        nextIndex = state.activeQuestionIndex - 1;
      } else {
        nextIndex = state.activeQuestionIndex + 1;
      }

      if (nextIndex >= state.totalCount || nextIndex < 0) {
        nextIndex = 0;
        if (prev) return null;
        return this.props.navigation.navigate('QuizIndex', {
          correctAns: state.correctCount
        });
      }
      return {
        activeQuestionIndex: nextIndex,
        answered: false
      };
    });
  };

  render() {
    const question = TEMP_QUESTIONS[this.state.activeQuestionIndex];
    const image = question.image.map(item => (
      <Image key={item.key} source={item.source} style={styles.imageSize} />
    ));
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.safearea}>
          <View>
            <Text style={styles.text}>{question.question}</Text>
            {image}
            <ButtonContainer>
              {question.answers.map(answer => (
                <Button
                  key={answer.id}
                  text={answer.text}
                  onPress={() => this.answer(answer.correct, true, false)}
                />
              ))}
            </ButtonContainer>
          </View>
          <Text style={styles.text}>
            {`${this.state.correctCount}/${this.state.totalCount}`}
          </Text>
        </SafeAreaView>
        <View style={styles.ButtonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text
              style={styles.buttonText}
              onPress={() => this.answer(false, false, true)}
            >
              Prev
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.answer(false, false, false)}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
        <Alert
          correct={this.state.answerCorrect}
          visibility={this.state.answered}
        />
      </View>
    );
  }
}

export default Quiz;
