//
//  quizPage.swift
//  Quiz App
//
//  Created by StudentAM on 4/10/24.
//

import SwiftUI

// makes a struct for each of the questions.
struct questions{
    //variable for question, answer, and which is correct
    var question: String
    var answers: [String]
    var right : String
}

struct quizPage: View {
    //variable for the score, bool if button has been pressed, and a current index to keep track of which problem they are on.
    @State var score: Int = 0
    @State private var picked: Bool = false
    @State private var currentIndex: Int = 0
    
    //variable to store all of the structs for each question
    var array = [
        //declares that this is linked to the questions struch and defines each needed variable
        questions(question:"What is the term used to describe a malicious software that disguises itself as a legitimate program to gain unauthorized access to a computer system?", answers: ["Malware","Code","Leet Code","Malvertising"], right: "Malware"),
        questions(question:"Which company developed the widely used JavaScript programming language?", answers: ["Netscape Communication","Google corperation","Bing","Facebook"], right: "Netscape Communication"),
        questions(question:"What does the acronym URL stand for, and what is its purpose on the internet?", answers: ["Unreal Reaction Locator","Uniform Readable Link","Usable Recouce Link","Uniform Resource Locator"], right: "Uniform Resource Locator"),
        questions(question:"What technology is used to transfer data wirelessly between devices over short distances, such as between a smartphone and a speaker?", answers: ["Blue too","WI-FI","Bluetooth","The Web"], right: "Bluetooth"),
        questions(question:"Which programming language (out of these) is commonly used for building dynamic web pages and server-side scripting?", answers: ["HTML","PHP","CSS","Java"], right: "PHP"),
        questions(question:"What is the purpose of a VPN (Virtual Private Network) when browsing the internet?", answers: ["Routes traffis through unsecure server","Changes Website","Routes traffic through secure server","Makes you a hacker"], right: "Routes traffic through secure server"),
        questions(question:"What is the function of a router in a computer network?", answers: ["Forwards packets between host","Gives VPN","Host on the network","Can print things"], right: "Forwards packets between host"),
        questions(question:"what tech allows users to interact with the computer without a keyboard and mouse? ", answers: ["camera","mice","speakers","Gesture recognition technology"], right: "Gesture recognition technology"),
        questions(question:"What is cloud computing, and what are some benefits of using cloud services?", answers: ["delivery of services over the internet","delievering packages","delivering media","delievering code"], right: "delivery of services over the internet"),
        questions(question:"What is the purpose of a firewall in network security?", answers: ["works as a hill","works as a pig","works as a barrier","works as a task"], right: "works as a barrier")
    ]
    var body: some View {
        // makes a navigation view that will make it be able to link pages
        NavigationView
        {
            // zstack to put image in background behind everthing.
            ZStack
            {
                //image name
                Image("download")
                    //makes it fit to page ignoring the safe area, and fitting to all parts of page.
                    .resizable()
                    .aspectRatio(contentMode: .fill)
                    .edgesIgnoringSafeArea(.all)
                    .frame(width: UIScreen.main.bounds.width, height: UIScreen.main.bounds.height)
                // Vstack to put everything on page on top of one another.
                VStack
                {
                    //text to display text on page
                    Text("Score: \(score)")
                        // font size to 40, font color to white,
                        .font(.system(size: 40))
                        .foregroundColor(.white)
                    // text for the current question
                    Text(array[currentIndex].question)
                        // adds padding, height & width, and background color for text
                        .padding()
                        .frame(width: 350, height: 150, alignment: .center)
                        .background(.white)
                    // spacer that has height and width to space out the question and the buttons
                    Spacer()
                        .frame(width: 100, height: 70)
                    //for each loop that goes through everything in the current questions answers
                    ForEach(array[currentIndex].answers, id: \.self){ answer in
                        //makes 4 buttons; action will launch the check answer function, and injects the answer
                        Button(action: {
                            self.checkAnswer(answer)
                        }) {
                            // sets the buttons text to the currnt answer it's on in the loop
                            Text(answer)
                                // gives it a set width and height
                                .frame(width: 350, height: 40)
                                //background for button
                                .background(
                                    // if the picked bool is true
                                    picked ?
                                    // if the answer is correct it will set the color to green, otherwise it will set it to red
                                    (answer == array[currentIndex].right ? Color.green : Color.red)
                                    //otherwise it will set the color to white
                                    : Color.white
                                )
                                //text color to white
                                .foregroundColor(Color.black)
                        }
                        //spacer between each button with a height of 20 and random width
                        Spacer()
                            .frame(width: 100, height: 20)
                        
                    }
                    //if the picked bool is true and the current index isnt 9 then,
                    if picked && currentIndex != 9
                    {
                        //it will put a button
                        Button(action: {
                            // button will reset picted to false and increment the current index.
                            picked = false
                            currentIndex += 1
                        }) {
                            // adds text to button
                            Text("Next")
                            // frame to button to add height and width, background color to bluem and the text color to black
                                .frame(width: 350, height: 40)
                                .background(.blue)
                                .foregroundColor(Color.black)
                        }
                    }
                    //if the current index is equal to 9 and the picked function is true then
                    if currentIndex == 9 && picked {
                        //put a navigation link insted to link the page to the final page, it will inject the score to display on next page and take off the back button.
                        NavigationLink(destination: SwiftUIView(score: score).navigationBarBackButtonHidden(true)) {
                            //adds text to navigation button, adds frame to add height and width, background color, and text color
                            Text("Next")
                                .frame(width: 350, height: 40)
                                .background(.blue)
                                .foregroundColor(.black)
                        }
                    }
                }
            }
        }
    }
    //checks answer function that will take the selected answer
    func checkAnswer(_ selectedAnswer: String) {
        // if the selected answer is correct and the picked bool is false
        if selectedAnswer == array[currentIndex].right && !picked
        {
            //increment the score and set the picked bool to true
            score += 1
            picked = true
        }
        // otherwise theanswer is incorrect and will just set picked to true
        else
        {
            picked = true
        }
    }
}

#Preview {
    quizPage()
}
