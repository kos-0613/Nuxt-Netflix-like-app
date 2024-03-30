export const localeCodes = []

export const localeMessages = {
}

export const additionalMessages = Object({})

export const resolveNuxtI18nOptions = async (context) => {
  const nuxtI18nOptions = Object({})
  const vueI18nOptionsLoader = async (context) => Object({"legacy":false,"locale":"en-US","fallbackLocale":"en-US","availableLocales":["en-US","fr-FR"],"messages": Object({"en-US":{
  "global": {
    "hello": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Hello World!"])},
    "no": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["No"])},
    "yes": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Yes"])},
    "films": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Films"])},
    "film": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Film"])},
    "series": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Series"])},
    "serie": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Serie"])},
    "actors": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Actors"])},
    "actor": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Actor"])},
    "directors": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Directors"])},
    "director": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Director"])},
    "genres": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Genres"])},
    "genre": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Genre"])}
  },
  "navigation": {
    "home": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Home"])},
    "films": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Films"])},
    "series": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Series"])},
    "search": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Search"])},
    "about": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["About"])},
    "contact": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Contact"])},
    "login": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Login"])},
    "logout": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Logout"])},
    "signup": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Sign up"])},
    "profile": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Profile"])},
    "settings": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Settings"])}
  },
  "error": {
    "404": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Page not found"])},
    "500": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Internal server error"])},
    "404_message": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["The page you are looking for does not exist."])},
    "500_message": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["An error has occurred on the server, please try again later."])},
    "user_not_found": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["User not found"])},
    "invalid_password": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Invalid password"])},
    "user_already_exists": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["User already exists"])},
    "unknown_error": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Unknown error"])},
    "invalid_code": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Invalid code"])}
  },
  "login": {
    "signin_to_your_account": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Sign in to your account"])},
    "login": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Login"])},
    "password": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Password"])},
    "forgot_password": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Forgot password ?"])},
    "signin": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Sign in"])},
    "dont_have_an_account": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Don't have an account? Sign up"])},
    "welcome_back": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Welcome back"])}
  },
  "signup": {
    "signup_to_your_account": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Sign up to your account"])},
    "username": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Username"])},
    "firstname": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Firstname"])},
    "lastname": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Lastname"])},
    "email": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Email"])},
    "password": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Password"])},
    "confirm_password": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Confirm Password"])},
    "signup": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Sign up"])},
    "already_have_an_account": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Already have an account ? Sign in"])},
    "signup_success": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["You have successfully registered"])}
  },
  "verify": {
    "verify_your_account": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Verify your account"])},
    "verify": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Verify"])},
    "verification_code_sent": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["A verification code has been sent to your email address"])},
    "verification_code_sent_again": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["A new verification code has been sent to your email address"])},
    "resend_email": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Resend email"])},
    "didnt_receive_email": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Didn't receive the email ?"])},
    "verification_successful": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Your account has been verified"])}
  },
  "profile": {
    "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Profil"])},
    "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Be careful, this information will be visible to all users in the final version of the application."])},
    "username": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Username"])},
    "bio": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Bio"])},
    "avatar": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Avatar"])},
    "delete_my_account": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Delete my account"])},
    "delete_my_account_description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Once your account is deleted, all of your data will be permanently removed. This action cannot be undone."])},
    "logout": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["See you soon"])},
    "profile_update_confirmation": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Are you sure you want to update your profile ?"])},
    "profile_delete_confirmation": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Are you sure you want to delete your account ?"])},
    "avatar_upload": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Upload an avatar"])},
    "avatar_upload_success": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Your avatar has been uploaded"])},
    "avatar_upload_error": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["An error has occurred while uploading your avatar"])},
    "avatar_uploaded": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Avatar uploaded"])},
    "avatar_none": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["No avatar"])},
    "avatar_save": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Change avatar"])},
    "update_profile": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Update profile"])},
    "profile_update_success": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Your profile has been updated"])},
    "profile_delete_success": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Your account has been deleted"])},
    "username_or_email_already_exists": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Username already exists"])}
  },
  "settings": {
    "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Settings"])},
    "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Here you can change your application settings."])},
    "language": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Language"])}
  },
  "home": {
    "trending": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Films and series trending this week"])}
  }
},"fr-FR":{
  "global": {
    "hello": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Hello World!"])},
    "no": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Non"])},
    "yes": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Oui"])},
    "films": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Films"])},
    "film": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Film"])},
    "series": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Séries"])},
    "serie": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Série"])},
    "actors": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Acteurs"])},
    "actor": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Acteur"])},
    "directors": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Réalisateurs"])},
    "director": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Réalisateur"])},
    "genres": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Genres"])},
    "genre": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Genre"])}
  },
  "navigation": {
    "home": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Accueil"])},
    "films": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Films"])},
    "series": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Séries"])},
    "search": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Recherche"])},
    "about": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["À propos"])},
    "contact": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Contact"])},
    "login": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Connexion"])},
    "logout": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Déconnexion"])},
    "signup": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Inscription"])},
    "profile": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Profil"])},
    "settings": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Paramètres"])}
  },
  "error": {
    "404": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cette page n'existe pas"])},
    "500": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Erreur interne du serveur"])},
    "404_message": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["La page que vous recherchez n'existe pas ou a été déplacée."])},
    "user_not_found": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Utilisateur introuvable"])},
    "invalid_password": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mot de passe incorrect"])},
    "user_already_exists": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cet utilisateur existe déjà"])},
    "unknown_error": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Une erreur inconnue s'est produite"])},
    "invalid_code": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Code de vérification incorrect"])}
  },
  "login": {
    "signin_to_your_account": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Connectez-vous à votre compte"])},
    "login": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Identifiant"])},
    "password": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mot de passe"])},
    "forgot_password": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mot de passe oublié ?"])},
    "signin": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Connexion"])},
    "dont_have_an_account": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Vous n'avez pas de compte ? Inscrivez-vous"])},
    "welcome_back": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Bienvenue"])}
  },
  "signup": {
    "signup_to_your_account": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Inscrivez-vous à votre compte"])},
    "username": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nom d'utilisateur"])},
    "firstname": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Prénom"])},
    "lastname": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nom"])},
    "email": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Email"])},
    "password": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mot de passe"])},
    "confirm_password": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Confirmer le mot de passe"])},
    "signup": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["S'inscrire"])},
    "already_have_an_account": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Vous avez déjà un compte ? Connectez-vous"])},
    "signup_success": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Votre compte a été créé avec succès"])}
  },
  "verify": {
    "verify_your_account": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Vérifiez votre compte"])},
    "verify": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Vérifier"])},
    "verification_code_sent": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Un code de vérification a été envoyé à votre adresse email, veuillez le saisir ci-dessous"])},
    "verification_code_sent_again": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Un nouveau code de vérification a été envoyé à votre adresse email"])},
    "resend_email": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Renvoyer l'email"])},
    "didnt_receive_email": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Vous n'avez pas reçu d'email ?"])},
    "verification_successful": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Votre compte a été vérifié avec succès"])}
  },
  "profile": {
    "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Profil"])},
    "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Gérez votre profil, attention ces informations seront public dans la version finale"])},
    "username": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nom d'utilisateur"])},
    "bio": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Bio"])},
    "avatar": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Avatar"])},
    "delete_my_account": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Supprimer mon compte"])},
    "delete_my_account_description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Une fois votre compte supprimé, toutes vos données seront définitivement supprimées. Cette action est irréversible."])},
    "logout": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["A bientôt"])},
    "profile_update_confirmation": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Êtes-vous sûr de vouloir mettre à jour votre profil ?"])},
    "profile_delete_confirmation": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Êtes-vous sûr de vouloir supprimer votre compte ?"])},
    "avatar_upload": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Télécharger un avatar"])},
    "avatar_upload_success": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Votre avatar a été mis à jour avec succès"])},
    "avatar_upload_error": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Une erreur s'est produite lors de la mise à jour de votre avatar"])},
    "avatar_uploaded": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Avatar téléchargé"])},
    "avatar_none": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Aucun avatar"])},
    "avatar_save": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Modifier l'avatar"])},
    "update_profile": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mettre à jour le profil"])},
    "profile_update_success": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Votre profil a été mis à jour avec succès"])},
    "profile_delete_success": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Votre compte a été supprimé avec succès"])},
    "username_or_email_already_exists": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ce nom d'utilisateur existe déjà"])}
  },
  "settings": {
    "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Paramètres"])},
    "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Gérez les paramètres de l'application"])},
    "language": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Langue"])}
  },
  "home": {
    "trending": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Films et séries populaires cette semaine"])}
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
