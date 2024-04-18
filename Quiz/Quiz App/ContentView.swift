//
//  ContentView.swift
//  Quiz App
//
//  Created by StudentAM on 4/10/24.
//


import SwiftUI

struct ContentView: View {
    var body: some View {
        //navigation view to be linked to other pages.
        NavigationView
        {
            //zstack to put wallpaper behind everything
            ZStack
            {
                //puts image on page
                Image("download")
                    //makes it fit to page ignoring the safe area, and fitting to all parts of page.
                    .resizable()
                    .aspectRatio(contentMode: .fill)
                    .edgesIgnoringSafeArea(.all)
                    .frame(width: UIScreen.main.bounds.width, height: UIScreen.main.bounds.height)
                //vertical stack to put title, navigation button, and spacer on top of one another.
                VStack {
                    //text for title
                    Text("Game Quiz!")
                        // makes text color white, and the font size 60
                        .foregroundStyle(.white)
                        .font(.system(size: 60))
                    //spacer that has a set width and height
                    Spacer()
                        .frame(width: /*@START_MENU_TOKEN@*/100/*@END_MENU_TOKEN@*/, height: 500)
                    // navigation link that when pressed it will put the user on quiz page, hiding back button
                    NavigationLink(destination: quizPage().navigationBarBackButtonHidden(true)){
                        // adds text to button so they know where to click
                        Text("Click Me!")
                            // makes text color white, and the font size to 40
                            .foregroundColor(.white)
                            .font(.system(size: 40))
                    }
                }
            }

        }
    }
}

#Preview {
    ContentView()
}
