export const localeCodes = []

export const localeMessages = {
}

export const additionalMessages = Object({})

export const resolveNuxtI18nOptions = async (context) => {
  const nuxtI18nOptions = Object({})
  const vueI18nOptionsLoader = async (context) => Object({"legacy":false,"locale":"en","fallbackLocale":"en","availableLocales":["en","fr"],"messages": Object({"en":{
  "global": {
    "hello": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Hello World!"])};fn.source="Hello World!";return fn;})(),
    "no": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["No"])};fn.source="No";return fn;})(),
    "yes": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Yes"])};fn.source="Yes";return fn;})(),
    "films": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Films"])};fn.source="Films";return fn;})(),
    "film": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Film"])};fn.source="Film";return fn;})(),
    "series": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Series"])};fn.source="Series";return fn;})(),
    "serie": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Serie"])};fn.source="Serie";return fn;})(),
    "actors": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Actors"])};fn.source="Actors";return fn;})(),
    "actor": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Actor"])};fn.source="Actor";return fn;})(),
    "directors": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Directors"])};fn.source="Directors";return fn;})(),
    "director": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Director"])};fn.source="Director";return fn;})(),
    "genres": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Genres"])};fn.source="Genres";return fn;})(),
    "genre": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Genre"])};fn.source="Genre";return fn;})()
  },
  "navigation": {
    "home": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Home"])};fn.source="Home";return fn;})(),
    "films": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Films"])};fn.source="Films";return fn;})(),
    "series": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Series"])};fn.source="Series";return fn;})(),
    "search": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Search"])};fn.source="Search";return fn;})(),
    "about": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["About"])};fn.source="About";return fn;})(),
    "contact": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Contact"])};fn.source="Contact";return fn;})(),
    "login": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Login"])};fn.source="Login";return fn;})(),
    "logout": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Logout"])};fn.source="Logout";return fn;})(),
    "signup": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Sign up"])};fn.source="Sign up";return fn;})(),
    "profile": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Profile"])};fn.source="Profile";return fn;})(),
    "settings": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Settings"])};fn.source="Settings";return fn;})()
  },
  "error": {
    "404": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Page not found"])};fn.source="Page not found";return fn;})(),
    "500": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Internal server error"])};fn.source="Internal server error";return fn;})(),
    "404_message": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["The page you are looking for does not exist."])};fn.source="The page you are looking for does not exist.";return fn;})(),
    "500_message": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["An error has occurred on the server, please try again later."])};fn.source="An error has occurred on the server, please try again later.";return fn;})(),
    "user_not_found": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["User not found"])};fn.source="User not found";return fn;})(),
    "invalid_password": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Invalid password"])};fn.source="Invalid password";return fn;})(),
    "user_already_exists": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["User already exists"])};fn.source="User already exists";return fn;})(),
    "unknown_error": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Unknown error"])};fn.source="Unknown error";return fn;})(),
    "invalid_code": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Invalid code"])};fn.source="Invalid code";return fn;})()
  },
  "login": {
    "signin_to_your_account": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Sign in to your account"])};fn.source="Sign in to your account";return fn;})(),
    "login": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Login"])};fn.source="Login";return fn;})(),
    "password": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Password"])};fn.source="Password";return fn;})(),
    "forgot_password": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Forgot password ?"])};fn.source="Forgot password ?";return fn;})(),
    "signin": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Sign in"])};fn.source="Sign in";return fn;})(),
    "dont_have_an_account": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Don't have an account? Sign up"])};fn.source="Don't have an account? Sign up";return fn;})(),
    "welcome_back": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Welcome back"])};fn.source="Welcome back";return fn;})()
  },
  "signup": {
    "signup_to_your_account": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Sign up to your account"])};fn.source="Sign up to your account";return fn;})(),
    "username": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Username"])};fn.source="Username";return fn;})(),
    "firstname": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Firstname"])};fn.source="Firstname";return fn;})(),
    "lastname": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Lastname"])};fn.source="Lastname";return fn;})(),
    "email": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Email"])};fn.source="Email";return fn;})(),
    "password": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Password"])};fn.source="Password";return fn;})(),
    "confirm_password": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Confirm Password"])};fn.source="Confirm Password";return fn;})(),
    "signup": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Sign up"])};fn.source="Sign up";return fn;})(),
    "already_have_an_account": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Already have an account ? Sign in"])};fn.source="Already have an account ? Sign in";return fn;})(),
    "signup_success": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["You have successfully registered"])};fn.source="You have successfully registered";return fn;})()
  },
  "verify": {
    "verify_your_account": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Verify your account"])};fn.source="Verify your account";return fn;})(),
    "verify": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Verify"])};fn.source="Verify";return fn;})(),
    "verification_code_sent": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["A verification code has been sent to your email address"])};fn.source="A verification code has been sent to your email address";return fn;})(),
    "verification_code_sent_again": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["A new verification code has been sent to your email address"])};fn.source="A new verification code has been sent to your email address";return fn;})(),
    "resend_email": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Resend email"])};fn.source="Resend email";return fn;})(),
    "didnt_receive_email": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Didn't receive the email ?"])};fn.source="Didn't receive the email ?";return fn;})(),
    "verification_successful": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Your account has been verified"])};fn.source="Your account has been verified";return fn;})()
  },
  "profile": {
    "title": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Profil"])};fn.source="Profil";return fn;})(),
    "description": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Be careful, this information will be visible to all users in the final version of the application."])};fn.source="Be careful, this information will be visible to all users in the final version of the application.";return fn;})(),
    "username": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Username"])};fn.source="Username";return fn;})(),
    "bio": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Bio"])};fn.source="Bio";return fn;})(),
    "avatar": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Avatar"])};fn.source="Avatar";return fn;})(),
    "delete_my_account": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Delete my account"])};fn.source="Delete my account";return fn;})(),
    "delete_my_account_description": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Once your account is deleted, all of your data will be permanently removed. This action cannot be undone."])};fn.source="Once your account is deleted, all of your data will be permanently removed. This action cannot be undone.";return fn;})(),
    "logout": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["See you soon"])};fn.source="See you soon";return fn;})(),
    "profile_update_confirmation": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Are you sure you want to update your profile ?"])};fn.source="Are you sure you want to update your profile ?";return fn;})(),
    "profile_delete_confirmation": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Are you sure you want to delete your account ?"])};fn.source="Are you sure you want to delete your account ?";return fn;})(),
    "avatar_upload": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Upload an avatar"])};fn.source="Upload an avatar";return fn;})(),
    "avatar_upload_success": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Your avatar has been uploaded"])};fn.source="Your avatar has been uploaded";return fn;})(),
    "avatar_upload_error": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["An error has occurred while uploading your avatar"])};fn.source="An error has occurred while uploading your avatar";return fn;})(),
    "avatar_uploaded": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Avatar uploaded"])};fn.source="Avatar uploaded";return fn;})(),
    "avatar_none": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["No avatar"])};fn.source="No avatar";return fn;})(),
    "avatar_save": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Change avatar"])};fn.source="Change avatar";return fn;})(),
    "update_profile": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Update profile"])};fn.source="Update profile";return fn;})(),
    "profile_update_success": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Your profile has been updated"])};fn.source="Your profile has been updated";return fn;})(),
    "profile_delete_success": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Your account has been deleted"])};fn.source="Your account has been deleted";return fn;})(),
    "username_or_email_already_exists": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Username already exists"])};fn.source="Username already exists";return fn;})()
  }
},"fr":{
  "global": {
    "hello": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Hello World!"])};fn.source="Hello World!";return fn;})(),
    "no": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Non"])};fn.source="Non";return fn;})(),
    "yes": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Oui"])};fn.source="Oui";return fn;})(),
    "films": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Films"])};fn.source="Films";return fn;})(),
    "film": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Film"])};fn.source="Film";return fn;})(),
    "series": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Séries"])};fn.source="Séries";return fn;})(),
    "serie": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Série"])};fn.source="Série";return fn;})(),
    "actors": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Acteurs"])};fn.source="Acteurs";return fn;})(),
    "actor": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Acteur"])};fn.source="Acteur";return fn;})(),
    "directors": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Réalisateurs"])};fn.source="Réalisateurs";return fn;})(),
    "director": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Réalisateur"])};fn.source="Réalisateur";return fn;})(),
    "genres": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Genres"])};fn.source="Genres";return fn;})(),
    "genre": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Genre"])};fn.source="Genre";return fn;})()
  },
  "navigation": {
    "home": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Accueil"])};fn.source="Accueil";return fn;})(),
    "films": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Films"])};fn.source="Films";return fn;})(),
    "series": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Séries"])};fn.source="Séries";return fn;})(),
    "search": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Recherche"])};fn.source="Recherche";return fn;})(),
    "about": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["À propos"])};fn.source="À propos";return fn;})(),
    "contact": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Contact"])};fn.source="Contact";return fn;})(),
    "login": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Connexion"])};fn.source="Connexion";return fn;})(),
    "logout": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Déconnexion"])};fn.source="Déconnexion";return fn;})(),
    "signup": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Inscription"])};fn.source="Inscription";return fn;})(),
    "profile": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Profil"])};fn.source="Profil";return fn;})(),
    "settings": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Paramètres"])};fn.source="Paramètres";return fn;})()
  },
  "error": {
    "404": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cette page n'existe pas"])};fn.source="Cette page n'existe pas";return fn;})(),
    "500": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Erreur interne du serveur"])};fn.source="Erreur interne du serveur";return fn;})(),
    "404_message": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["La page que vous recherchez n'existe pas ou a été déplacée."])};fn.source="La page que vous recherchez n'existe pas ou a été déplacée.";return fn;})(),
    "user_not_found": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Utilisateur introuvable"])};fn.source="Utilisateur introuvable";return fn;})(),
    "invalid_password": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mot de passe incorrect"])};fn.source="Mot de passe incorrect";return fn;})(),
    "user_already_exists": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cet utilisateur existe déjà"])};fn.source="Cet utilisateur existe déjà";return fn;})(),
    "unknown_error": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Une erreur inconnue s'est produite"])};fn.source="Une erreur inconnue s'est produite";return fn;})(),
    "invalid_code": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Code de vérification incorrect"])};fn.source="Code de vérification incorrect";return fn;})()
  },
  "login": {
    "signin_to_your_account": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Connectez-vous à votre compte"])};fn.source="Connectez-vous à votre compte";return fn;})(),
    "login": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Identifiant"])};fn.source="Identifiant";return fn;})(),
    "password": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mot de passe"])};fn.source="Mot de passe";return fn;})(),
    "forgot_password": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mot de passe oublié ?"])};fn.source="Mot de passe oublié ?";return fn;})(),
    "signin": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Connexion"])};fn.source="Connexion";return fn;})(),
    "dont_have_an_account": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Vous n'avez pas de compte ? Inscrivez-vous"])};fn.source="Vous n'avez pas de compte ? Inscrivez-vous";return fn;})(),
    "welcome_back": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Bienvenue"])};fn.source="Bienvenue";return fn;})()
  },
  "signup": {
    "signup_to_your_account": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Inscrivez-vous à votre compte"])};fn.source="Inscrivez-vous à votre compte";return fn;})(),
    "username": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nom d'utilisateur"])};fn.source="Nom d'utilisateur";return fn;})(),
    "firstname": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Prénom"])};fn.source="Prénom";return fn;})(),
    "lastname": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nom"])};fn.source="Nom";return fn;})(),
    "email": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Email"])};fn.source="Email";return fn;})(),
    "password": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mot de passe"])};fn.source="Mot de passe";return fn;})(),
    "confirm_password": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Confirmer le mot de passe"])};fn.source="Confirmer le mot de passe";return fn;})(),
    "signup": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["S'inscrire"])};fn.source="S'inscrire";return fn;})(),
    "already_have_an_account": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Vous avez déjà un compte ? Connectez-vous"])};fn.source="Vous avez déjà un compte ? Connectez-vous";return fn;})(),
    "signup_success": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Votre compte a été créé avec succès"])};fn.source="Votre compte a été créé avec succès";return fn;})()
  },
  "verify": {
    "verify_your_account": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Vérifiez votre compte"])};fn.source="Vérifiez votre compte";return fn;})(),
    "verify": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Vérifier"])};fn.source="Vérifier";return fn;})(),
    "verification_code_sent": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Un code de vérification a été envoyé à votre adresse email, veuillez le saisir ci-dessous"])};fn.source="Un code de vérification a été envoyé à votre adresse email, veuillez le saisir ci-dessous";return fn;})(),
    "verification_code_sent_again": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Un nouveau code de vérification a été envoyé à votre adresse email"])};fn.source="Un nouveau code de vérification a été envoyé à votre adresse email";return fn;})(),
    "resend_email": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Renvoyer l'email"])};fn.source="Renvoyer l'email";return fn;})(),
    "didnt_receive_email": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Vous n'avez pas reçu d'email ?"])};fn.source="Vous n'avez pas reçu d'email ?";return fn;})(),
    "verification_successful": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Votre compte a été vérifié avec succès"])};fn.source="Votre compte a été vérifié avec succès";return fn;})()
  },
  "profile": {
    "title": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Profil"])};fn.source="Profil";return fn;})(),
    "description": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Gérez votre profil, attention ces informations seront public dans la version finale"])};fn.source="Gérez votre profil, attention ces informations seront public dans la version finale";return fn;})(),
    "username": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nom d'utilisateur"])};fn.source="Nom d'utilisateur";return fn;})(),
    "bio": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Bio"])};fn.source="Bio";return fn;})(),
    "avatar": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Avatar"])};fn.source="Avatar";return fn;})(),
    "delete_my_account": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Supprimer mon compte"])};fn.source="Supprimer mon compte";return fn;})(),
    "delete_my_account_description": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Une fois votre compte supprimé, toutes vos données seront définitivement supprimées. Cette action est irréversible."])};fn.source="Une fois votre compte supprimé, toutes vos données seront définitivement supprimées. Cette action est irréversible.";return fn;})(),
    "logout": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["A bientôt"])};fn.source="A bientôt";return fn;})(),
    "profile_update_confirmation": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Êtes-vous sûr de vouloir mettre à jour votre profil ?"])};fn.source="Êtes-vous sûr de vouloir mettre à jour votre profil ?";return fn;})(),
    "profile_delete_confirmation": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Êtes-vous sûr de vouloir supprimer votre compte ?"])};fn.source="Êtes-vous sûr de vouloir supprimer votre compte ?";return fn;})(),
    "avatar_upload": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Télécharger un avatar"])};fn.source="Télécharger un avatar";return fn;})(),
    "avatar_upload_success": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Votre avatar a été mis à jour avec succès"])};fn.source="Votre avatar a été mis à jour avec succès";return fn;})(),
    "avatar_upload_error": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Une erreur s'est produite lors de la mise à jour de votre avatar"])};fn.source="Une erreur s'est produite lors de la mise à jour de votre avatar";return fn;})(),
    "avatar_uploaded": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Avatar téléchargé"])};fn.source="Avatar téléchargé";return fn;})(),
    "avatar_none": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Aucun avatar"])};fn.source="Aucun avatar";return fn;})(),
    "avatar_save": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Modifier l'avatar"])};fn.source="Modifier l'avatar";return fn;})(),
    "update_profile": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mettre à jour le profil"])};fn.source="Mettre à jour le profil";return fn;})(),
    "profile_update_success": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Votre profil a été mis à jour avec succès"])};fn.source="Votre profil a été mis à jour avec succès";return fn;})(),
    "profile_delete_success": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Votre compte a été supprimé avec succès"])};fn.source="Votre compte a été supprimé avec succès";return fn;})(),
    "username_or_email_already_exists": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ce nom d'utilisateur existe déjà"])};fn.source="Ce nom d'utilisateur existe déjà";return fn;})()
  }
},}),})
  nuxtI18nOptions.vueI18n = await vueI18nOptionsLoader(context)
  nuxtI18nOptions.locales = []
  nuxtI18nOptions.defaultLocale = ""
  nuxtI18nOptions.defaultDirection = "ltr"
  nuxtI18nOptions.routesNameSeparator = "___"
  nuxtI18nOptions.trailingSlash = false
  nuxtI18nOptions.defaultLocaleRouteNameSuffix = "default"
  nuxtI18nOptions.strategy = "prefix_except_default"
  nuxtI18nOptions.lazy = false
  nuxtI18nOptions.langDir = null
  nuxtI18nOptions.rootRedirect = null
  nuxtI18nOptions.detectBrowserLanguage = Object({"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true})
  nuxtI18nOptions.differentDomains = false
  nuxtI18nOptions.baseUrl = ""
  nuxtI18nOptions.dynamicRouteParams = false
  nuxtI18nOptions.customRoutes = "page"
  nuxtI18nOptions.pages = Object({})
  nuxtI18nOptions.skipSettingLocaleOnNavigate = false
  nuxtI18nOptions.onBeforeLanguageSwitch = (() => "")
  nuxtI18nOptions.onLanguageSwitched = (() => null)
  nuxtI18nOptions.types = undefined
  nuxtI18nOptions.debug = false
  return nuxtI18nOptions
}

export const nuxtI18nOptionsDefault = Object({vueI18n: undefined,locales: [],defaultLocale: "",defaultDirection: "ltr",routesNameSeparator: "___",trailingSlash: false,defaultLocaleRouteNameSuffix: "default",strategy: "prefix_except_default",lazy: false,langDir: null,rootRedirect: null,detectBrowserLanguage: Object({"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true}),differentDomains: false,baseUrl: "",dynamicRouteParams: false,customRoutes: "page",pages: Object({}),skipSettingLocaleOnNavigate: false,onBeforeLanguageSwitch: (() => ""),onLanguageSwitched: (() => null),types: undefined,debug: false})

export const nuxtI18nInternalOptions = Object({__normalizedLocales: []})
export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const isSSG = false
export const isSSR = true
