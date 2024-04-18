//
//  SwiftUIView.swift
//  Quiz App
//
//  Created by StudentAM on 4/12/24.
//

import SwiftUI

struct SwiftUIView: View {
    //makes a vaiable for the score to be injected
    @State var score: Int
    var body: some View {
        // naviagtion view to be able to link pages together.
        NavigationView
        {
            //zstack to put the stuff on backgronud
            ZStack
            {
                // adds image
                Image("download")
                    //makes it fit to page ignoring the safe area, and fitting to all parts of page.
                    .resizable()
                    .aspectRatio(contentMode: .fill)
                    .edgesIgnoringSafeArea(.all)
                    .frame(width: UIScreen.main.bounds.width, height: UIScreen.main.bounds.height)
                //makes vstack to put everything on top of one another.
                VStack
                {
                    //text that congragulates person and display's score
                    Text("Congrats! Your Score was: \(score)")
                        //sets the text color to white and the size of the text to 30
                        .foregroundColor(.white)
                        .font(.system(size: 30))
                    // spacer to space out everything
                    Spacer()
                        .frame(width: 100, height: 400)
                    // horizontal stack to put naigation buttons next to one another.
                    HStack
                    {
                        //navigation link that will put you back to the quiz page and will put the navigation back bar to hidden to effectivly restart.
                        NavigationLink(destination: quizPage().navigationBarBackButtonHidden(true)) {
                            //adds text to the button
                            Text("Restart")
                                //adds dimensions to the button, makes the background blue, and the text color to white
                                .frame(width: 150, height: 40)
                                .background(.blue)
                                .foregroundColor(.white)
                        }
                        //navigation link that will put you back to the quiz page and will put the navigation back bar to hidden to effectivly restart.
                        NavigationLink(destination: ContentView().navigationBarBackButtonHidden(true)) {
                            //adds text to the button
                            Text("I'm Done")
                            //adds dimensions to the button, makes the background blue, and the text color to white
                                .frame(width: 150, height: 40)
                                .background(.blue)
                                .foregroundColor(.white)
                        }
                    }
                }
            }
        }
    }
}

#Preview {
    //makes it so it can accept the score value 23 is a placeholder.
    SwiftUIView(score: 23)
}
