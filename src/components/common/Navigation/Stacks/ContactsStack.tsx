// External deps
import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Internal deps
import ContactsScreen from "../../../../screens/ContactsScreen";

const ContactsStack: FC = () => {
    const ContactsStack = createNativeStackNavigator();

    return (
        <ContactsStack.Navigator>
            <ContactsStack.Screen name="Contacts screen" component={ContactsScreen} />
        </ContactsStack.Navigator>
    );
}

export default ContactsStack;
