import React, { useState } from "react"
import { View, ScrollView, Text } from "react-native"
import { Feather } from "@expo/vector-icons"
import AsyncStorage from "@react-native-community/async-storage"

import PageHeader from "../../components/PageHeader"

import styles from "./styles"
import TeacherItem, { Teacher } from "../../components/TeacherItem"
import { TextInput, BorderlessButton, RectButton } from "react-native-gesture-handler"

import api from "../../services/api";

function TeacherList() {
  const [isFiltersVisible, setIsFiltersVisible] = useState(true)

  const [favorites, setFavorites] = useState<number[]>([])
  const [teachers, setTeachers] = useState([])

  const [subject, setSubject] = useState("")
  const [week_day, setWeekDay] = useState("")
  const [time, setTime] = useState("")

  async function handleFiltersSubmit() {
    loadFavorites();

    const response = await api.get("/classes", {
      params: {
        subject,
        week_day,
        time
      }
    })

    setTeachers(response.data)
    setIsFiltersVisible(false)
  }


  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible)
  }

  function loadFavorites() {
    AsyncStorage.getItem("favorites").then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => teacher.id)

        setFavorites(favoritedTeachersIds)
      }
    })
  }

  return (
    <View style={styles.container} >
      <PageHeader
        title="Proffys disponíveis"

        headerRight={
          <BorderlessButton
            onPress={handleToggleFiltersVisible}
          >
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        }
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>
              Matéria
            </Text>
            <TextInput
              style={styles.input}
              value={subject}
              onChangeText={text => setSubject(text)}
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>
                  Dia da semana
              </Text>
                <TextInput
                  style={styles.input}
                  value={week_day}
                  onChangeText={text => setWeekDay(text)}
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>
                  Horário
              </Text>
                <TextInput
                  style={styles.input}
                  value={time}
                  onChangeText={time => setTime(time)}
                />
              </View>
            </View>

            <RectButton style={styles.submitButton} onPress={handleFiltersSubmit}>
              <Text style={styles.submitButtonText}>
                Filtrar
              </Text>
            </RectButton>
          </View>
        )}
      </PageHeader >

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
        {teachers.map((teacher: Teacher) => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorited={favorites.includes(teacher.id)}
            />
          )
        })}
      </ScrollView>
    </View >
  )
}

export default TeacherList