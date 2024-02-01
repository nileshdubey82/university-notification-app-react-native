/* eslint-disable prettier/prettier */
import  React,{useState,useEffect} from 'react';
import { Text, View, StyleSheet, Image,TextInput,TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
export default function ForgetPass(props) {

  const [gettingloginid,setgettingloginid]=useState('')
 
 useEffect(() => {

            try{
              AsyncStorage.getItem("Email")
              .then((value)=>{
                setgettingloginid(value);
                var A=`${value}`;
                // InsertRecord(A);
              console.log(A)
              console.log("receive id");
              console.log(value);
              })
            }
            catch(e){
              console.log(e)
            }
            var A=`${gettingloginid}`;
            console.log(A);
            console.log("success");
  }, []);

const [password,setpassword]=React.useState('');
const [password2,setpassword2]=React.useState('');


  const InsertRecord = (A) => {
    var Email1 =`${gettingloginid}`
    var Password=`${password}`
    var ConfirmPw=`${password2}`
    if (
     
      Password.length == 0 
    ) {
      alert('Required Field Is Missing!!!');
    } 
    
    // Password validations
    else if (Password.length < 8) {
      alert('Minimum 08 characters required!!!');
    } else if (!/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(Password)) {
      alert(' password  Use atleast 01 special character!!!');
    } else if (/[ ]/.test(Password)) {
      alert("Don't include space in password!!!"); 
    } else if (Password !== ConfirmPw) {
      alert('Password doesnot match!!!');
    } else {
      var APIURL = "http://localhost/API_ALUMNI/forget-pass.php";
      var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json' 
      };
      var Data = {
        "Email":Email1,
        "Password":Password
      };

      fetch(APIURL, { 
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data)
      })
        .then((response) =>response.json()) 
        .then((response) => {
          // alert(response[0].Message)
          if (response[0].Message =="Success") {
            alert("Success forget pass")
props.navigation.push('SignIn')
          }
          console.log(Data);
        })
        .catch((error) => {
          alert(error)
          console.error("ERROR FOUND" + error);
        })
    }

  } 
  return (
    <View style={styles.container}>
           <View style={styles.viewStyle}>
      <Text
        style={{
          color: 'green',
          // eslint-disable-next-line prettier/prettier
          fontWeight: 'bold',
          fontSize: 30,
          marginBottom: 10,
        }}>
        Genrate New Password
      
      </Text>
      <Text style={{fontSize:15,}}>Enter your New Password :</Text>
      <View style={{top:10}}>
        <TextInput
          placeholder="Enter Your new password"
          placeholderTextColor="black"
          style={styles.textInput}
          onChangeText={(e) => setpassword(e)}
        />
      </View>
       <Text style={{fontSize:15,}}>Confirm Password :</Text>
      <View style={{top:10}}>
        <TextInput
          placeholder="Enter Your new password"
          placeholderTextColor="black"
          style={styles.textInput}
          onChangeText={(e) => setpassword2(e)}
        />
      </View>
        <TouchableOpacity  style={{backgroundColor:"#009387",justifyContent:'center',alignItems:'center',height:50}} onPress={()=>InsertRecord()} > 
                <Text style={{color: 'white'}}>Forgot password?</Text>
            </TouchableOpacity> 
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  
  },
    viewStyle: {
    flex: 1,
    padding: 20,
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 20,
    height: 40,
    fontSize: 15,
    flex: 1,
    top:10,
   
  },
});
