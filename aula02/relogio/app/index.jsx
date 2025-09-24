import { Text, Image, View, StyleSheet, Pressable } from "react-native";
import { useState, useEffect } from "react";

export default function Index() {
  const [timeLeft, setTimeLeft] = useState("25:00");
  const [isRunning, setIsRunning] = useState(false);
  const [timeLabel, setTimeLabel] = useState("Start");

  function atualizar() {
    // Lógica fictícia por enquanto
    setTimeLeft("20:00");
  }

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning) {
      interval = setInterval(() => {
        atualizar();
      }, 1000);
      setTimeLabel("Stop");
    } else {
      setTimeLabel("Start");
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);

  function startTimer() {
    setIsRunning((prev) => !prev);
  }

  return (
    <View style={style.container}>
      <Image source={require('../img/relogio.jpeg')} style={style.image} />
      <View style={style.actions}>
        <Text style={style.timer}>{timeLeft}</Text>
        <Pressable
          style={isRunning ? style.buttonStart : style.buttonStop}
          onPress={startTimer}
        >
          <Text style={style.textButton}>{timeLabel}</Text>
        </Pressable>
      </View>
      <View style={style.footer}>
        <Text style={style.textfooter}>Curso de react native</Text>
        <Text style={style.textfooter}>2025 - Meu App</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 16,
    paddingHorizontal: 16, // previne scroll lateral
  },
  image: {
    width: "100%",
    maxWidth: 500,
    height: 500,
    resizeMode: "contain",
    backgroundColor: "black",
  },
  actions: {
    padding: 24,
    backgroundColor: "#14448080",
    width: "100%",
    maxWidth: 350,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#144480",
    marginVertical: 20,
  },
  timer: {
    fontSize: 54,
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonStart: {
    backgroundColor: "red",
    borderRadius: 32,
    padding: 12,
  },
  buttonStop: {
    backgroundColor: "green",
    borderRadius: 32,
    padding: 12,
  },
  textButton: {
    textAlign: "center",
    color: "#021123",
    fontSize: 18,
  },
  footer: {
    width: "100%",
    maxWidth: 350,
    marginTop: 20,
  },
  textfooter: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#98A0A8",
    fontSize: 12.5,
  },
});
