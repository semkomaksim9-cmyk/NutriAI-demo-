import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Camera, Image as ImageIcon, Pencil, Trash2, Share2, Save, Plus, X, Sparkles } from 'lucide-react'
import PremiumAI from './PremiumAI'
import PremiumPaywall from './PremiumPaywall'
import { translations } from './locales'

const FREE_SCAN_LIMIT = 3
const SCANS_USED_KEY = 'nutriai-free-scans-used'
const IS_PREMIUM_KEY = 'nutriai-is-premium'

const FOOD_DB = {
  'яблоко': { kcal: 52, protein: 0.3, carbs: 14, fat: 0.2 },
  'банан': { kcal: 89, protein: 1.1, carbs: 23, fat: 0.3 },
  'апельсин': { kcal: 47, protein: 0.9, carbs: 12, fat: 0.1 },
  'груша': { kcal: 57, protein: 0.4, carbs: 15, fat: 0.1 },
  'виноград': { kcal: 69, protein: 0.7, carbs: 18, fat: 0.2 },
  'куриная грудка': { kcal: 165, protein: 31, carbs: 0, fat: 3.6 },
  'курица варёная': { kcal: 137, protein: 29, carbs: 0, fat: 1.9 },
  'говядина': { kcal: 250, protein: 26, carbs: 0, fat: 17 },
  'свинина': { kcal: 242, protein: 27, carbs: 0, fat: 14 },
  'лосось': { kcal: 208, protein: 20, carbs: 0, fat: 13 },
  'тунец': { kcal: 132, protein: 28, carbs: 0, fat: 1 },
  'яйцо': { kcal: 155, protein: 13, carbs: 1.1, fat: 11 },
  'творог 5%': { kcal: 121, protein: 17, carbs: 3, fat: 5 },
  'творог обезжиренный': { kcal: 71, protein: 16, carbs: 1.3, fat: 0.6 },
  'йогурт натуральный': { kcal: 66, protein: 5, carbs: 8, fat: 3.3 },
  'молоко': { kcal: 52, protein: 2.8, carbs: 4.7, fat: 2.5 },
  'сыр': { kcal: 363, protein: 26, carbs: 0.5, fat: 29 },
  'рис варёный': { kcal: 130, protein: 2.7, carbs: 28, fat: 0.3 },
  'гречка варёная': { kcal: 110, protein: 4, carbs: 21, fat: 1.1 },
  'овсянка': { kcal: 88, protein: 3, carbs: 15, fat: 1.7 },
  'макароны варёные': { kcal: 131, protein: 5, carbs: 25, fat: 1.1 },
  'картофель варёный': { kcal: 82, protein: 2, carbs: 17, fat: 0.1 },
  'картофель фри': { kcal: 312, protein: 3.4, carbs: 41, fat: 15 },
  'хлеб белый': { kcal: 265, protein: 9, carbs: 49, fat: 3.2 },
  'хлеб ржаной': { kcal: 174, protein: 6.6, carbs: 34, fat: 1.2 },
  'авокадо': { kcal: 160, protein: 2, carbs: 9, fat: 15 },
  'орехи грецкие': { kcal: 654, protein: 15, carbs: 14, fat: 65 },
  'миндаль': { kcal: 579, protein: 21, carbs: 22, fat: 50 },
  'арахис': { kcal: 567, protein: 26, carbs: 16, fat: 49 },
  'оливковое масло': { kcal: 884, protein: 0, carbs: 0, fat: 100 },
  'сливочное масло': { kcal: 717, protein: 0.9, carbs: 0.1, fat: 81 },
  'мёд': { kcal: 304, protein: 0.3, carbs: 82, fat: 0 },
  'сахар': { kcal: 387, protein: 0, carbs: 100, fat: 0 },
  'шоколад молочный': { kcal: 535, protein: 7.7, carbs: 59, fat: 30 },
  'брокколи': { kcal: 34, protein: 2.8, carbs: 7, fat: 0.4 },
  'помидор': { kcal: 18, protein: 0.9, carbs: 3.9, fat: 0.2 },
  'огурец': { kcal: 15, protein: 0.7, carbs: 3.6, fat: 0.1 },
  'морковь': { kcal: 41, protein: 0.9, carbs: 10, fat: 0.2 },
  'капуста': { kcal: 25, protein: 1.3, carbs: 6, fat: 0.1 },
  'лук репчатый': { kcal: 40, protein: 1.1, carbs: 9, fat: 0.1 },
  'чечевица варёная': { kcal: 116, protein: 9, carbs: 20, fat: 0.4 },
  'фасоль варёная': { kcal: 127, protein: 8.7, carbs: 23, fat: 0.5 },
  'нут варёный': { kcal: 164, protein: 9, carbs: 27, fat: 2.6 },
  'креветки': { kcal: 99, protein: 24, carbs: 0.2, fat: 0.3 },
  'кефир': { kcal: 53, protein: 3, carbs: 4, fat: 2.5 },
  'сметана': { kcal: 206, protein: 2.8, carbs: 3.2, fat: 20 },
  'яблочный сок': { kcal: 46, protein: 0.1, carbs: 11, fat: 0.1 },
  'пицца': { kcal: 266, protein: 11, carbs: 33, fat: 10 },
  'бургер': { kcal: 295, protein: 17, carbs: 24, fat: 15 },
  'суши': { kcal: 150, protein: 6, carbs: 23, fat: 3.5 },
  'пельмени': { kcal: 250, protein: 12, carbs: 30, fat: 10 },
  'вареники': { kcal: 220, protein: 7, carbs: 32, fat: 7 },
  'борщ': { kcal: 70, protein: 3, carbs: 10, fat: 2 },
  'щи': { kcal: 40, protein: 2, carbs: 6, fat: 1 },
  'куриный бульон': { kcal: 15, protein: 1.5, carbs: 0.5, fat: 0.5 },
  'оливковая паста': { kcal: 120, protein: 1, carbs: 1, fat: 13 },
  'греческий салат': { kcal: 140, protein: 4, carbs: 6, fat: 11 },
  'салат оливье': { kcal: 180, protein: 4, carbs: 12, fat: 12 },
  'капуста квашеная': { kcal: 19, protein: 1, carbs: 4, fat: 0 },
  'печенье': { kcal: 480, protein: 6, carbs: 68, fat: 22 },
  'чипсы': { kcal: 536, protein: 6.6, carbs: 53, fat: 34 },
  'шашлык': { kcal: 220, protein: 22, carbs: 1, fat: 14 },
  'картофельное пюре': { kcal: 110, protein: 2.5, carbs: 18, fat: 3.5 },
  'лапша': { kcal: 138, protein: 5, carbs: 25, fat: 2 },
  'рис басмати': { kcal: 130, protein: 2.5, carbs: 28.5, fat: 0.3 },
  'рис жасмин': { kcal: 129, protein: 2.8, carbs: 28, fat: 0.3 },
  'перловка': { kcal: 123, protein: 3.4, carbs: 27, fat: 1.1 },
  'пшено': { kcal: 119, protein: 3.5, carbs: 23, fat: 1.1 },
  'кукуруза варёная': { kcal: 96, protein: 3.4, carbs: 21, fat: 1.5 },
  'тыква запеченная': { kcal: 26, protein: 1, carbs: 7, fat: 0.1 },
  'баклажан жареный': { kcal: 120, protein: 2.1, carbs: 10, fat: 8 },
  'кабачок тушёный': { kcal: 35, protein: 1.2, carbs: 6, fat: 0.2 },
  'грибы шампиньоны': { kcal: 22, protein: 3.1, carbs: 3.3, fat: 0.3 },
  'фасоль красная': { kcal: 127, protein: 8.7, carbs: 23, fat: 0.5 },
  'горох сушёный': { kcal: 340, protein: 21, carbs: 60, fat: 1.5 },
  'соевый соус': { kcal: 53, protein: 8, carbs: 4.9, fat: 0.6 },
  'майонез': { kcal: 680, protein: 1, carbs: 1, fat: 75 },
  'кетчуп': { kcal: 112, protein: 1.5, carbs: 25, fat: 0.1 },
  'горчица': { kcal: 66, protein: 4, carbs: 5, fat: 4.7 },
  'мёд цветочный': { kcal: 304, protein: 0.3, carbs: 82, fat: 0 },
  'клубника': { kcal: 32, protein: 0.7, carbs: 7.7, fat: 0.3 },
  'малина': { kcal: 52, protein: 1.2, carbs: 12, fat: 0.7 },
  'черника': { kcal: 57, protein: 0.7, carbs: 14, fat: 0.3 },
  'манго': { kcal: 60, protein: 0.8, carbs: 15, fat: 0.4 },
  'ананас': { kcal: 50, protein: 0.5, carbs: 13, fat: 0.1 },
  'киви': { kcal: 61, protein: 1.1, carbs: 15, fat: 0.5 },
  'авокадо тост': { kcal: 250, protein: 6, carbs: 20, fat: 16 },
  'окрошка': { kcal: 70, protein: 4, carbs: 6, fat: 3 },
  'сайра консервированная': { kcal: 136, protein: 18, carbs: 0, fat: 6.5 },
  'сардина консервированная': { kcal: 185, protein: 24, carbs: 0, fat: 9 },
  'икра красная': { kcal: 196, protein: 29, carbs: 0, fat: 9 },
  'икра чёрная': { kcal: 264, protein: 25, carbs: 4, fat: 17 },
  'молочный коктейль': { kcal: 140, protein: 5, carbs: 20, fat: 3 },
  'коктейль протеиновый': { kcal: 120, protein: 24, carbs: 3, fat: 1.5 },
  'творожный десерт': { kcal: 170, protein: 9, carbs: 16, fat: 7 },
  'омлет': { kcal: 154, protein: 11, carbs: 2, fat: 11 },
  'яйца вареные': { kcal: 155, protein: 13, carbs: 1.1, fat: 11 },
  'куриная ножка': { kcal: 215, protein: 26, carbs: 0, fat: 11 },
  'индейка': { kcal: 135, protein: 29, carbs: 0, fat: 1.5 },
  'филе индейки': { kcal: 135, protein: 29, carbs: 0, fat: 1.5 },
  'телятина': { kcal: 143, protein: 20, carbs: 0, fat: 7 },
  'говяжий стейк': { kcal: 271, protein: 25, carbs: 0, fat: 18 },
  'сосиска': { kcal: 301, protein: 12, carbs: 2.1, fat: 27 },
  'колбаса варёная': { kcal: 265, protein: 12, carbs: 2, fat: 22 },
  'колбаса сырокопченая': { kcal: 430, protein: 24, carbs: 1.5, fat: 36 },
  'сало': { kcal: 900, protein: 1.7, carbs: 0, fat: 100 },
  'гречневая каша': { kcal: 110, protein: 4, carbs: 21, fat: 1.1 },
  'овсяная каша': { kcal: 68, protein: 2.5, carbs: 12, fat: 1.5 },
  'рисовая каша': { kcal: 115, protein: 2.1, carbs: 23, fat: 1.1 },
  'сок апельсиновый': { kcal: 45, protein: 0.7, carbs: 10.4, fat: 0.2 },
  'сок яблочный': { kcal: 46, protein: 0.1, carbs: 11, fat: 0.1 },
}

const RING_CIRC = 2 * Math.PI * 82
const GOAL_KEY = 'calorie-goal'
const CUSTOM_FOODS_KEY = 'custom-foods'
const PROFILE_KEY = 'user-profile'
const AUTH_KEY = 'user-auth'
const SESSION_KEY = 'user-session'
const DAY_KEY_PREFIX = 'foodlog:'
const GOAL_FACTORS = {
  lose: { kcal: 0.85, protein: 2.0, fat: 0.7 },
  maintain: { kcal: 1.0, protein: 1.8, fat: 0.8 },
  gain: { kcal: 1.12, protein: 1.9, fat: 0.9 },
}

const GOAL_CHOICES = {
  lose: { icon: '🔥', key: 'weight_loss' },
  maintain: { icon: '⚖️', key: 'weight_maintain' },
  gain: { icon: '💪', key: 'weight_gain' },
  other: { icon: '✍️', key: 'weight_other' },
}

const MOTIVATION_QUOTES = {
  en: [
    'Small steps every day build a strong body and mind.',
    'You do not need to be perfect, only consistent.',
    'Your future self will thank you for today\'s discipline.',
    'Progress is progress, even when it feels slow.',
    'One healthy choice can change your whole day.',
    'Energy follows effort. Keep going.',
    'Take care of your body, it carries your dreams.',
    'You are stronger than your excuses.',
  ],
  ru: [
    'Маленькие шаги каждый день дают большой результат.',
    'Не нужна идеальность, нужна стабильность.',
    'Твое будущее «спасибо» начинается сегодня.',
    'Даже медленный прогресс — это прогресс.',
    'Одно полезное решение может изменить весь день.',
    'Энергия приходит к тем, кто действует.',
    'Заботься о теле — оно несет тебя к целям.',
    'Ты сильнее своих отговорок.',
  ],
  uk: [
    'Маленькі кроки щодня дають великий результат.',
    'Не потрібна ідеальність, потрібна стабільність.',
    'Твоє майбутнє «дякую» починається сьогодні.',
    'Навіть повільний прогрес — це прогрес.',
    'Одне корисне рішення може змінити весь день.',
    'Енергія приходить до тих, хто діє.',
    'Дбай про тіло — воно несе тебе до цілей.',
    'Ти сильніший за свої відмовки.',
  ],
}

const HEIGHT_OPTIONS = Array.from({ length: 111 }, (_, i) => String(120 + i))
const AGE_OPTIONS = Array.from({ length: 88 }, (_, i) => String(13 + i))

function getTodayKey(){
  return new Date().toISOString().slice(0,10)
}

function getWeekDates(today = new Date()){
  const dates = []
  const start = new Date(today)
  start.setDate(today.getDate() - today.getDay())
  for(let i = 0; i < 7; i++){
    const d = new Date(start)
    d.setDate(start.getDate() + i)
    dates.push(d)
  }
  return dates
}

function capitalize(text){
  if(!text) return ''
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export default function App(){
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'en')
  const [activeDay, setActiveDay] = useState(new Date())
  const activeDayKey = useMemo(() => activeDay.toISOString().slice(0,10), [activeDay])
  const todayKey = useMemo(() => new Date().toISOString().slice(0,10), [])
  const [goal, setGoal] = useState(2000)
  const [entries, setEntries] = useState([])
  const [customFoods, setCustomFoods] = useState({})
  const [auth, setAuth] = useState({ login: '', password: '', email: '', nickname: '' })
  const [confirmPassword, setConfirmPassword] = useState('')
  const [authSaved, setAuthSaved] = useState(false)
  const [profile, setProfile] = useState({ weight: '', height: '', age: '', weightUnit: 'kg', desiredWeight: '', goalType: 'maintain', customGoalText: '' })
  const [profileSaved, setProfileSaved] = useState(false)
  const [step, setStep] = useState(1)
  const [pageTransition, setPageTransition] = useState('enter')
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [foodName, setFoodName] = useState('')
  const [foodGrams, setFoodGrams] = useState('')
  const [showManual, setShowManual] = useState(false)
  const [manualKcal, setManualKcal] = useState('')
  const [manualProtein, setManualProtein] = useState('')
  const [manualCarbs, setManualCarbs] = useState('')
  const [manualFat, setManualFat] = useState('')
  const [rememberFood, setRememberFood] = useState(true)
  const [photoStage, setPhotoStage] = useState('idle') // idle | scanning | result | error
  const [photoPreviewUrl, setPhotoPreviewUrl] = useState(null)
  const [dishName, setDishName] = useState('')
  const [healthScore, setHealthScore] = useState(0)
  const [baseIngredients, setBaseIngredients] = useState([]) // at portion 100%
  const [portion, setPortion] = useState(100) // %
  const [editingIngredientId, setEditingIngredientId] = useState(null)
  const [scanAnalyzeStep, setScanAnalyzeStep] = useState(0)
  const [weightText, setWeightText] = useState('0')
  const [scanToast, setScanToast] = useState(null)
  const [freeScansUsed, setFreeScansUsed] = useState(() => Number(localStorage.getItem(SCANS_USED_KEY)) || 0)
  const [isPremium, setIsPremium] = useState(() => localStorage.getItem(IS_PREMIUM_KEY) === 'true')
  const [showPaywall, setShowPaywall] = useState(false)
  const photoInputRef = useRef(null)
  const scanStepIntervalRef = useRef(null)
  const weightFocusedRef = useRef(false)
  const [isDiaryPanelOpen, setIsDiaryPanelOpen] = useState(false)
  const [diaryPanelMode, setDiaryPanelMode] = useState('add')
  const [showGoalModal, setShowGoalModal] = useState(false)
  const [activePicker, setActivePicker] = useState('')
  const [pickerDraft, setPickerDraft] = useState('')
  const wheelListRef = useRef(null)
  const wheelScrollTimeoutRef = useRef(null)

  const t = (key) => translations[language]?.[key] || translations['en']?.[key] || key
  const weekdays = translations[language]?.days_short || translations.en.days_short
  const localeMap = { en: 'en-US', ru: 'ru-RU', uk: 'uk-UA' }

  const changeLanguage = (newLang) => {
    setLanguage(newLang)
    localStorage.setItem('language', newLang)
  }

  useEffect(() => {
    const savedGoal = Number(localStorage.getItem(GOAL_KEY) || '') || 2000
    setGoal(savedGoal)

    const savedEntries = localStorage.getItem(DAY_KEY_PREFIX + activeDayKey)
    if(savedEntries){
      try { setEntries(JSON.parse(savedEntries)) } catch (err) { setEntries([]) }
    } else {
      setEntries([])
    }

    const savedCustom = localStorage.getItem(CUSTOM_FOODS_KEY)
    if(savedCustom){
      try { setCustomFoods(JSON.parse(savedCustom)) } catch (err) { setCustomFoods({}) }
    }
  }, [activeDayKey])

  useEffect(() => {
    let savedAuthValid = false
    let savedProfileValid = false
    let savedSessionValid = false

    const savedAuth = localStorage.getItem(AUTH_KEY)
    if(savedAuth){
      try {
        const parsed = JSON.parse(savedAuth)
        if(parsed.login && parsed.password && parsed.email){
          setAuth({ login: parsed.login, password: '', email: parsed.email, nickname: parsed.nickname || parsed.login })
          savedAuthValid = true

          const rawSession = localStorage.getItem(SESSION_KEY)
          if(rawSession){
            try {
              const session = JSON.parse(rawSession)
              if(session?.login && session.login.toLowerCase() === parsed.login.toLowerCase()){
                savedSessionValid = true
              }
            } catch (err) {
              localStorage.removeItem(SESSION_KEY)
            }
          }
        }
      } catch (err) {
        setAuth({ login: '', password: '', email: '', nickname: '' })
      }
    }

    const savedProfile = localStorage.getItem(PROFILE_KEY)
    if(savedProfile){
      try {
        const parsed = JSON.parse(savedProfile)
        if(Number(parsed.weight) > 0 && Number(parsed.height) > 0 && Number(parsed.age) > 0){
          setProfile({
            weight: parsed.weight,
            height: parsed.height,
            age: parsed.age,
            weightUnit: parsed.weightUnit === 'lbs' ? 'lbs' : 'kg',
            desiredWeight: parsed.desiredWeight || '',
            goalType: parsed.goalType || 'maintain',
            customGoalText: parsed.customGoalText || '',
          })
          savedProfileValid = true
        }
      } catch (err) {
        setProfile({ weight: '', height: '', age: '', weightUnit: 'kg', desiredWeight: '', goalType: 'maintain', customGoalText: '' })
      }
    }

    setAuthSaved(savedAuthValid)
    setProfileSaved(savedProfileValid)
    if(savedAuthValid && savedSessionValid){
      setStep(savedProfileValid ? 3 : 2)
    } else {
      setStep(1)
    }
  }, [])

  function openDiaryPanel(mode){
    setDiaryPanelMode(mode)
    setIsDiaryPanelOpen(true)
  }

  useEffect(() => {
    localStorage.setItem(DAY_KEY_PREFIX + activeDayKey, JSON.stringify(entries))
  }, [entries, activeDayKey])

  useEffect(() => {
    localStorage.setItem(GOAL_KEY, String(goal))
  }, [goal])

  useEffect(() => {
    localStorage.setItem(CUSTOM_FOODS_KEY, JSON.stringify(customFoods))
  }, [customFoods])

  const profileComplete = Number(profile.weight) > 0 && Number(profile.height) > 0 && Number(profile.age) > 0
  const authComplete = auth.login.trim() && auth.password.trim() && auth.email.trim() && auth.password === confirmPassword

  const weightDisplay = useMemo(() => {
    const value = Number(profile.weight)
    if(!value) return ''
    if(profile.weightUnit === 'lbs'){
      const lbs = value * 2.20462
      return String(Math.round(lbs * 10) / 10)
    }
    return String(value)
  }, [profile.weight, profile.weightUnit])

  const weightSummaryDisplay = useMemo(() => {
    const value = Number(profile.weight)
    if(!value) return '—'
    if(profile.weightUnit === 'lbs'){
      const lbs = value * 2.20462
      return `${Math.round(lbs * 10) / 10} ${t('weight_unit_lbs')}`
    }
    return `${value} ${t('weight_unit_kg')}`
  }, [profile.weight, profile.weightUnit, language])

  const desiredWeightDisplay = useMemo(() => {
    const value = Number(profile.desiredWeight)
    if(!value) return ''
    if(profile.weightUnit === 'lbs'){
      const lbs = value * 2.20462
      return String(Math.round(lbs * 10) / 10)
    }
    return String(value)
  }, [profile.desiredWeight, profile.weightUnit])

  const desiredWeightSummaryDisplay = useMemo(() => {
    const value = Number(profile.desiredWeight)
    if(!value) return '—'
    if(profile.weightUnit === 'lbs'){
      const lbs = value * 2.20462
      return `${Math.round(lbs * 10) / 10} ${t('weight_unit_lbs')}`
    }
    return `${value} ${t('weight_unit_kg')}`
  }, [profile.desiredWeight, profile.weightUnit, language])

  const weightWheelOptions = useMemo(() => {
    if(profile.weightUnit === 'lbs'){
      return Array.from({ length: 421 }, (_, i) => String(80 + i))
    }
    return Array.from({ length: 221 }, (_, i) => String(30 + i))
  }, [profile.weightUnit])

  const desiredWeightWheelOptions = weightWheelOptions

  function nearestWheelValue(value, options){
    if(!value || !options.length) return options[0] || ''
    const num = Number(value)
    if(!Number.isFinite(num)) return options[0] || ''
    let nearest = options[0]
    let diff = Math.abs(Number(options[0]) - num)
    for(const option of options){
      const currentDiff = Math.abs(Number(option) - num)
      if(currentDiff < diff){
        diff = currentDiff
        nearest = option
      }
    }
    return nearest
  }

  function handleWeightChange(rawValue){
    if(rawValue === ''){
      setProfile(prev => ({ ...prev, weight: '' }))
      return
    }
    const numeric = Number(rawValue)
    if(!Number.isFinite(numeric)) return
    const kgValue = profile.weightUnit === 'lbs' ? numeric / 2.20462 : numeric
    const normalized = Math.round(kgValue * 10) / 10
    setProfile(prev => ({ ...prev, weight: String(normalized) }))
  }

  function handleDesiredWeightChange(rawValue){
    if(rawValue === ''){
      setProfile(prev => ({ ...prev, desiredWeight: '' }))
      return
    }
    const numeric = Number(rawValue)
    if(!Number.isFinite(numeric)) return
    const kgValue = profile.weightUnit === 'lbs' ? numeric / 2.20462 : numeric
    const normalized = Math.round(kgValue * 10) / 10
    setProfile(prev => ({ ...prev, desiredWeight: String(normalized) }))
  }

  function getPickerOptions(field){
    if(field === 'weight' || field === 'desiredWeight') return weightWheelOptions
    if(field === 'height') return HEIGHT_OPTIONS
    return AGE_OPTIONS
  }

  function getPickerUnit(field){
    if(field === 'height') return t('height_unit_short')
    if(field === 'age') return t('age_unit_short')
    if(field === 'weight' || field === 'desiredWeight'){
      return profile.weightUnit === 'lbs' ? t('weight_unit_lbs') : t('weight_unit_kg')
    }
    return profile.weightUnit
  }

  function formatMacroSummary(protein, carbs, fat){
    return `${t('protein_label')} ${protein}${t('grams_unit_short')} · ${t('carbs_label')} ${carbs}${t('grams_unit_short')} · ${t('fats_label')} ${fat}${t('grams_unit_short')}`
  }

  function getPickerLabel(field){
    if(field === 'weight') return t('weight')
    if(field === 'height') return t('height')
    if(field === 'age') return t('age')
    return t('desired_weight')
  }

  function getPickerDisplayValue(field){
    const options = getPickerOptions(field)
    if(field === 'weight') return nearestWheelValue(weightDisplay, options)
    if(field === 'height') return nearestWheelValue(profile.height, options)
    if(field === 'age') return nearestWheelValue(profile.age, options)
    return nearestWheelValue(desiredWeightDisplay, options)
  }

  function openPicker(field){
    if(activePicker === field){
      setActivePicker('')
      return
    }
    setPickerDraft(getPickerDisplayValue(field))
    setActivePicker(field)
  }

  function centerWheelValue(value, behavior = 'smooth'){
    const container = wheelListRef.current
    if(!container) return
    const target = container.querySelector(`[data-wheel-value="${value}"]`)
    if(!target) return
    const top = target.offsetTop - (container.clientHeight - target.clientHeight) / 2
    container.scrollTo({ top, behavior })
  }

  function handleWheelScroll(){
    const container = wheelListRef.current
    if(!container) return
    if(wheelScrollTimeoutRef.current){
      window.clearTimeout(wheelScrollTimeoutRef.current)
    }
    wheelScrollTimeoutRef.current = window.setTimeout(() => {
      const buttons = Array.from(container.querySelectorAll('[data-wheel-value]'))
      if(!buttons.length) return
      const center = container.scrollTop + container.clientHeight / 2
      let closest = buttons[0]
      let closestDistance = Number.POSITIVE_INFINITY

      for(const button of buttons){
        const buttonCenter = button.offsetTop + button.clientHeight / 2
        const distance = Math.abs(buttonCenter - center)
        if(distance < closestDistance){
          closestDistance = distance
          closest = button
        }
      }

      const nextValue = closest.getAttribute('data-wheel-value') || ''
      setPickerDraft(nextValue)
      centerWheelValue(nextValue)
    }, 80)
  }

  useEffect(() => {
    if(!activePicker) return
    const selectedValue = nearestWheelValue(pickerDraft, getPickerOptions(activePicker))
    const timeoutId = window.setTimeout(() => {
      centerWheelValue(selectedValue, 'auto')
    }, 0)
    return () => window.clearTimeout(timeoutId)
  }, [activePicker, pickerDraft])

  useEffect(() => {
    return () => {
      if(wheelScrollTimeoutRef.current){
        window.clearTimeout(wheelScrollTimeoutRef.current)
      }
    }
  }, [])

  function saveProfileSilent(updatedProfile){
    const p = updatedProfile || profile
    if(!p.weight || !p.height || !p.age) return
    localStorage.setItem(PROFILE_KEY, JSON.stringify(p))
    setProfileSaved(true)
    const goalCfg = GOAL_FACTORS[p.goalType] || GOAL_FACTORS.maintain
    const currentW = Number(p.weight)
    const desiredW = Number(p.desiredWeight)
    const targetW = desiredW > 0 ? desiredW : currentW
    const kcal = Math.round(targetW * 24 * goalCfg.kcal)
    const protein = Math.round(targetW * goalCfg.protein)
    const fat = Math.round(targetW * goalCfg.fat)
    const carbs = Math.max(0, Math.round((kcal - protein * 4 - fat * 9) / 4))
    setGoal(kcal)
    localStorage.setItem(GOAL_KEY, String(kcal))
    return { kcal, protein, carbs, fat }
  }

  function confirmPickerSelection(){
    const selected = nearestWheelValue(pickerDraft, getPickerOptions(activePicker))
    let updatedProfile = null
    if(activePicker === 'weight'){
      const numeric = Number(selected)
      const kgValue = profile.weightUnit === 'lbs' ? numeric / 2.20462 : numeric
      const normalized = String(Math.round(kgValue * 10) / 10)
      updatedProfile = { ...profile, weight: normalized }
      setProfile(prev => ({ ...prev, weight: normalized }))
    } else if(activePicker === 'height'){
      updatedProfile = { ...profile, height: selected }
      setProfile(prev => ({ ...prev, height: selected }))
    } else if(activePicker === 'age'){
      updatedProfile = { ...profile, age: selected }
      setProfile(prev => ({ ...prev, age: selected }))
    } else if(activePicker === 'desiredWeight'){
      const numeric = Number(selected)
      const kgValue = profile.weightUnit === 'lbs' ? numeric / 2.20462 : numeric
      const normalized = String(Math.round(kgValue * 10) / 10)
      updatedProfile = { ...profile, desiredWeight: normalized }
      setProfile(prev => ({ ...prev, desiredWeight: normalized }))
    }
    if(updatedProfile) saveProfileSilent(updatedProfile)
    setActivePicker('')
  }
  const profileGoal = useMemo(() => {
    if(!profileComplete) return 2000
    return Math.round(Number(profile.weight) * 24)
  }, [profileComplete, profile.weight])

  const profileNutrition = useMemo(() => {
    if(!profileComplete) return null
    const weight = Number(profile.weight)
    const desiredWeight = Number(profile.desiredWeight)
    const targetWeight = desiredWeight > 0 ? desiredWeight : weight
    const goalCfg = GOAL_FACTORS[profile.goalType] || GOAL_FACTORS.maintain
    const kcal = Math.round(targetWeight * 24 * goalCfg.kcal)
    const protein = Math.round(targetWeight * goalCfg.protein)
    const fat = Math.round(targetWeight * goalCfg.fat)
    const carbs = Math.max(0, Math.round((kcal - protein * 4 - fat * 9) / 4))
    return { kcal, protein, carbs, fat }
  }, [profile, profileComplete])

  const allFoods = useMemo(() => {
    return [...Object.keys(FOOD_DB), ...Object.keys(customFoods)]
  }, [customFoods])

  function normalizeFoodText(text){
    return String(text || '')
      .toLowerCase()
      .trim()
      .replace(/ё/g, 'е')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-zа-я0-9\s-]/gi, ' ')
      .replace(/\s+/g, ' ')
  }

  function levenshteinDistance(a, b){
    if(a === b) return 0
    if(!a.length) return b.length
    if(!b.length) return a.length

    const prev = Array.from({ length: b.length + 1 }, (_, i) => i)
    const curr = Array(b.length + 1).fill(0)

    for(let i = 1; i <= a.length; i++){
      curr[0] = i
      for(let j = 1; j <= b.length; j++){
        const cost = a[i - 1] === b[j - 1] ? 0 : 1
        curr[j] = Math.min(
          prev[j] + 1,
          curr[j - 1] + 1,
          prev[j - 1] + cost
        )
      }
      for(let j = 0; j <= b.length; j++){
        prev[j] = curr[j]
      }
    }

    return prev[b.length]
  }

  const normalizedFoodName = foodName.trim().toLowerCase()
  const normalizedFoodQuery = normalizeFoodText(foodName)
  const foundFood = useMemo(() => {
    if(!normalizedFoodName) return null
    if(customFoods[normalizedFoodName]) return customFoods[normalizedFoodName]
    if(FOOD_DB[normalizedFoodName]) return FOOD_DB[normalizedFoodName]
    const partial = allFoods.find(key => key.includes(normalizedFoodName) || normalizedFoodName.includes(key))
    return partial ? (customFoods[partial] || FOOD_DB[partial]) : null
  }, [normalizedFoodName, allFoods, customFoods])

  const foodSuggestions = useMemo(() => {
    if(normalizedFoodQuery.length < 1) return []

    const ranked = allFoods
      .map(name => {
        const candidate = normalizeFoodText(name)
        if(!candidate) return null

        let score = 0
        if(candidate === normalizedFoodQuery) score = 1
        else if(candidate.startsWith(normalizedFoodQuery)) score = 0.96
        else if(candidate.includes(normalizedFoodQuery)) score = 0.9
        else if(normalizedFoodQuery.includes(candidate)) score = 0.86
        else {
          const distance = levenshteinDistance(normalizedFoodQuery, candidate)
          const longest = Math.max(normalizedFoodQuery.length, candidate.length) || 1
          score = 1 - (distance / longest)
        }

        if(candidate[0] === normalizedFoodQuery[0]) score += 0.04
        return { name, score }
      })
      .filter(item => item && item.score >= 0.3)
      .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name))
      .slice(0, 6)

    return ranked.map(item => item.name)
  }, [allFoods, normalizedFoodQuery])

  useEffect(() => {
    if(foundFood){
      setShowManual(false)
    }
  }, [foundFood])

  const grams = Number(foodGrams)
  const previewText = useMemo(() => {
    if(!foodName.trim()) return { text: '', type: '' }
    if(foundFood && grams > 0){
      const kcal = Math.round(foundFood.kcal * grams / 100)
      const protein = Math.round(foundFood.protein * grams / 100 * 10) / 10
      const carbs = Math.round(foundFood.carbs * grams / 100 * 10) / 10
      const fat = Math.round(foundFood.fat * grams / 100 * 10) / 10
      return { text: `${t('preview_prefix')}: ${kcal} ${t('kcal')} · ${formatMacroSummary(protein, carbs, fat)}`, type: 'found' }
    }
    if(foundFood){
      return { text: t('food_found_grams'), type: 'found' }
    }
    return { text: t('food_missing_manual'), type: 'missing' }
  }, [foundFood, grams, foodName, language])

  function resetForm(){
    setFoodName('')
    setFoodGrams('')
    setManualKcal('')
    setManualProtein('')
    setManualCarbs('')
    setManualFat('')
    setShowManual(false)
  }

  function addEntry(){
    const name = foodName.trim()
    if(!name) return
    if(!grams || grams <= 0) return
    if(!foundFood){
      setShowManual(true)
      return
    }

    const item = {
      name: capitalize(name),
      kcal: Math.round(foundFood.kcal * grams / 100),
      protein: Math.round(foundFood.protein * grams / 100 * 10) / 10,
      carbs: Math.round(foundFood.carbs * grams / 100 * 10) / 10,
      fat: Math.round(foundFood.fat * grams / 100 * 10) / 10,
    }

    setEntries(prev => [...prev, item])
    resetForm()
  }

  async function handlePhotoSelect(e){
    const file = e.target.files && e.target.files[0]
    if(!file) return

    if(!isPremium && freeScansUsed >= FREE_SCAN_LIMIT){
      if(photoInputRef.current) photoInputRef.current.value = ''
      setShowPaywall(true)
      return
    }

    const dataUrl = await new Promise((resolve) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result)
      reader.readAsDataURL(file)
    })

    setPhotoPreviewUrl(dataUrl)
    setBaseIngredients([])
    setPortion(100)
    setPhotoStage('scanning')
    setScanAnalyzeStep(0)

    clearInterval(scanStepIntervalRef.current)
    scanStepIntervalRef.current = setInterval(() => {
      setScanAnalyzeStep(prev => Math.min(prev + 1, 3))
    }, 900)

    const formData = new FormData()
    formData.append('photo', file)

    try{
      const res = await fetch('/api/food-photo', { method: 'POST', body: formData })
      const data = await res.json()
      if(!res.ok || !Array.isArray(data.items) || data.items.length === 0){
        clearInterval(scanStepIntervalRef.current)
        setPhotoStage('error')
        return
      }
      clearInterval(scanStepIntervalRef.current)
      setDishName(capitalize(data.dish_name || data.items[0].name || t('product')))
      setHealthScore(Math.max(0, Math.min(10, Math.round(Number(data.health_score) || 0))))
      setBaseIngredients(data.items.map((it, i) => ({
        id: `ai-${i}-${Date.now()}`,
        name: capitalize(it.name || ''),
        grams: Number(it.grams) || 0,
        kcal: Number(it.kcal) || 0,
        protein: Number(it.protein) || 0,
        carbs: Number(it.carbs) || 0,
        fat: Number(it.fat) || 0,
      })))
      setPhotoStage('result')

      if(!isPremium){
        const newCount = freeScansUsed + 1
        setFreeScansUsed(newCount)
        localStorage.setItem(SCANS_USED_KEY, String(newCount))
        if(newCount >= FREE_SCAN_LIMIT){
          setShowPaywall(true)
        }
      }
    }catch(err){
      clearInterval(scanStepIntervalRef.current)
      setPhotoStage('error')
    }finally{
      if(photoInputRef.current) photoInputRef.current.value = ''
    }
  }

  function handlePremiumSubscribe(planId){
    if(planId === 'restore'){
      // Placeholder for real IAP restore logic
      showScanToast(t('saved_toast') || 'Restored')
      return
    }
    setIsPremium(true)
    localStorage.setItem(IS_PREMIUM_KEY, 'true')
    setShowPaywall(false)
  }

  // Ingredients scaled to the current portion %, and their combined totals
  const scaledIngredients = baseIngredients.map(it => ({
    ...it,
    grams: Math.round(it.grams * portion / 100),
    kcal: it.kcal * portion / 100,
    protein: it.protein * portion / 100,
    carbs: it.carbs * portion / 100,
    fat: it.fat * portion / 100,
  }))
  const photoTotals = scaledIngredients.reduce((acc, it) => ({
    grams: acc.grams + it.grams,
    kcal: acc.kcal + it.kcal,
    protein: acc.protein + it.protein,
    carbs: acc.carbs + it.carbs,
    fat: acc.fat + it.fat,
  }), { grams: 0, kcal: 0, protein: 0, carbs: 0, fat: 0 })

  useEffect(() => {
    if(!weightFocusedRef.current) setWeightText(String(Math.round(photoTotals.grams)))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [photoTotals.grams])

  function handleWeightChange(e){
    const val = e.target.value
    setWeightText(val)
    const num = Number(val)
    const baseTotal = baseIngredients.reduce((s, it) => s + it.grams, 0)
    if(val !== '' && !Number.isNaN(num) && num >= 0 && baseTotal > 0){
      setPortion(Math.round(num / baseTotal * 100))
    }
  }
  function handleWeightBlur(){
    weightFocusedRef.current = false
    setWeightText(String(Math.round(photoTotals.grams)))
  }

  function updateIngredientGrams(id, newGrams){
    setBaseIngredients(prev => prev.map(it => {
      if(it.id !== id) return it
      const baseGrams = newGrams / (portion / 100)
      const ratio = it.grams ? baseGrams / it.grams : 0
      return {
        ...it,
        grams: Math.round(baseGrams),
        kcal: it.kcal * ratio,
        protein: it.protein * ratio,
        carbs: it.carbs * ratio,
        fat: it.fat * ratio,
      }
    }))
  }

  function deleteIngredient(id){
    setBaseIngredients(prev => prev.filter(it => it.id !== id))
  }

  function addIngredient(){
    setBaseIngredients(prev => [...prev, {
      id: `manual-${Date.now()}`,
      name: t('new_ingredient'),
      grams: 50, kcal: 0, protein: 0, carbs: 0, fat: 0,
    }])
  }

  function addPhotoResultToDiary(){
    if(!baseIngredients.length) return
    const entry = {
      name: dishName,
      kcal: Math.round(photoTotals.kcal),
      protein: Math.round(photoTotals.protein * 10) / 10,
      carbs: Math.round(photoTotals.carbs * 10) / 10,
      fat: Math.round(photoTotals.fat * 10) / 10,
      photo: photoPreviewUrl,
    }
    setEntries(prev => [...prev, entry])
    showScanToast(t('added_to_diary_toast'))
    resetPhotoFlow()
  }

  function showScanToast(label){
    setScanToast(label)
    setTimeout(() => setScanToast(null), 2000)
  }

  function resetPhotoFlow(){
    clearInterval(scanStepIntervalRef.current)
    setPhotoStage('idle')
    setPhotoPreviewUrl(null)
    setBaseIngredients([])
    setPortion(100)
    setScanAnalyzeStep(0)
  }

  function addManualEntry(){
    const name = foodName.trim()
    if(!name) return
    if(!grams || grams <= 0) return
    const kcal = Number(manualKcal)
    if(!kcal || kcal <= 0) return

    const protein = Number(manualProtein) || 0
    const carbs = Number(manualCarbs) || 0
    const fat = Number(manualFat) || 0

    const item = {
      name: capitalize(name),
      kcal: Math.round(kcal),
      protein: Math.round(protein * 10) / 10,
      carbs: Math.round(carbs * 10) / 10,
      fat: Math.round(fat * 10) / 10,
    }

    setEntries(prev => [...prev, item])

    if(rememberFood){
      const key = name.toLowerCase()
      const factor = 100 / grams
      setCustomFoods(prev => ({
        ...prev,
        [key]: {
          kcal: Math.round(kcal * factor * 10) / 10,
          protein: Math.round(protein * factor * 10) / 10,
          carbs: Math.round(carbs * factor * 10) / 10,
          fat: Math.round(fat * factor * 10) / 10,
        }
      }))
    }

    resetForm()
  }

  function deleteEntry(index){
    setEntries(prev => prev.filter((_, idx) => idx !== index))
  }

  function changeDay(delta){
    setActiveDay(prev => {
      const next = new Date(prev)
      next.setDate(prev.getDate() + delta)
      return next
    })
  }

  function clearDay(){
    if(!entries.length) return
    if(window.confirm(t('delete_day_confirm'))){
      setEntries([])
      localStorage.removeItem(DAY_KEY_PREFIX + activeDayKey)
    }
  }

  function saveProfile(){
    if(!profileComplete){
      alert(t('invalid_profile'))
      return
    }
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile))
    if(authComplete){
      localStorage.setItem(AUTH_KEY, JSON.stringify(auth))
    }
    setProfileSaved(true)
    setIsTransitioning(true)
    setPageTransition('exit')
    setTimeout(() => {
      setStep(3)
      setPageTransition('enter')
      setIsTransitioning(false)
    }, 300)
    if(!Number(localStorage.getItem(GOAL_KEY))){
      setGoal(profileNutrition?.kcal || profileGoal)
    }
  }

  function logoutAccount(){
    if(isTransitioning) return
    setIsTransitioning(true)
    setPageTransition('exit')
    setTimeout(() => {
      localStorage.removeItem(SESSION_KEY)
      setAuth(prev => ({ ...prev, password: '' }))
      setConfirmPassword('')
      setAuthSaved(false)
      setStep(1)
      setPageTransition('enter')
      setIsTransitioning(false)
    }, 300)
  }

  function animateStepChange(targetStep){
    if(isTransitioning) return
    setIsTransitioning(true)
    setPageTransition('exit')
    setTimeout(() => {
      setStep(targetStep)
      setPageTransition('enter')
      setIsTransitioning(false)
    }, 300)
  }

  function validatePassword(pwd) {
    const hasUpperCase = /[A-Z]/.test(pwd)
    const hasNumber = /[0-9]/.test(pwd)
    const hasMinLength = pwd.length >= 8
    return hasUpperCase && hasNumber && hasMinLength
  }

  function saveAuth(){
    if(!auth.login.trim() || !auth.password.trim() || !auth.email.trim()){
      alert(t('fill_account_fields'))
      return
    }
    if(!validatePassword(auth.password)){
      alert(t('password_requirements_alert'))
      return
    }
    if(auth.password !== confirmPassword){
      alert(t('password_mismatch'))
      return
    }
    const authToSave = { ...auth, nickname: auth.login }
    localStorage.setItem(AUTH_KEY, JSON.stringify(authToSave))
    localStorage.setItem(SESSION_KEY, JSON.stringify({ login: authToSave.login }))
    setAuth(authToSave)
    setAuthSaved(true)
    setIsTransitioning(true)
    setPageTransition('exit')
    setTimeout(() => {
      setStep(2)
      setPageTransition('enter')
      setIsTransitioning(false)
    }, 300)
  }

  function attemptLogin(){
    if(!auth.login.trim() || !auth.password.trim()){
      alert(t('login_required'))
      return
    }
    const savedAuth = localStorage.getItem(AUTH_KEY)
    if(!savedAuth){
      alert(t('account_not_found'))
      return
    }
    try {
      const parsed = JSON.parse(savedAuth)
      const loginMatch = auth.login.trim().toLowerCase()
      const validLogin = parsed.login.toLowerCase() === loginMatch || parsed.email.toLowerCase() === loginMatch
      if(!validLogin || parsed.password !== auth.password){
        alert(t('invalid_credentials'))
        return
      }
      setAuth(parsed)
      setAuthSaved(true)
      localStorage.setItem(SESSION_KEY, JSON.stringify({ login: parsed.login }))
      const nextStep = profileSaved ? 3 : 2
      setIsTransitioning(true)
      setPageTransition('exit')
      setTimeout(() => {
        setStep(nextStep)
        setPageTransition('enter')
        setIsTransitioning(false)
      }, 300)
    } catch (err) {
      alert(t('auth_error'))
    }
  }

  const weekDates = useMemo(() => getWeekDates(activeDay), [activeDay])

  const weekTotals = useMemo(() => {
    const today = activeDayKey
    const totals = {}
    weekDates.forEach(d => {
      const key = d.toISOString().slice(0,10)
      if(key === today) return
      const raw = localStorage.getItem(DAY_KEY_PREFIX + key)
      const items = raw ? JSON.parse(raw) : []
      totals[key] = items.reduce((sum, item) => sum + (Number(item.kcal) || 0), 0)
    })
    return totals
  }, [activeDayKey, weekDates])

  const totals = useMemo(() => {
    return entries.reduce((acc, item) => {
      acc.kcal += Number(item.kcal) || 0
      acc.protein += Number(item.protein) || 0
      acc.carbs += Number(item.carbs) || 0
      acc.fat += Number(item.fat) || 0
      return acc
    }, { kcal: 0, protein: 0, carbs: 0, fat: 0 })
  }, [entries])

  const effectiveGoal = profileNutrition ? profileNutrition.kcal : goal
  const isProfileMode = Boolean(profileNutrition)

  const targets = useMemo(() => {
    if(profileNutrition){
      return {
        protein: profileNutrition.protein,
        carbs: profileNutrition.carbs,
        fat: profileNutrition.fat,
      }
    }
    return {
      protein: Math.round(effectiveGoal * 0.30 / 4),
      carbs: Math.round(effectiveGoal * 0.45 / 4),
      fat: Math.round(effectiveGoal * 0.25 / 9),
    }
  }, [effectiveGoal, profileNutrition])

  const ringPercent = effectiveGoal > 0 ? Math.round(totals.kcal / effectiveGoal * 100) : 0
  const ringOffset = RING_CIRC * (1 - Math.min(100, ringPercent) / 100)
  const ringColor = ringPercent > 100
    ? '#ff3d7f'
    : ringPercent >= 50
      ? '#ff5a1f'
      : (() => {
          const t = ringPercent / 50
          const start = { r: 174, g: 232, b: 58 }
          const end = { r: 255, g: 90, b: 31 }
          const r = Math.round(start.r + (end.r - start.r) * t)
          const g = Math.round(start.g + (end.g - start.g) * t)
          const b = Math.round(start.b + (end.b - start.b) * t)
          return `rgb(${r}, ${g}, ${b})`
        })()

  const dateBadge = new Intl.DateTimeFormat(localeMap[language] || 'en-US', { day:'2-digit', month:'long', weekday:'short' }).format(activeDay)

  const motivationQuote = useMemo(() => {
    const quotePool = MOTIVATION_QUOTES[language] || MOTIVATION_QUOTES.en
    const now = new Date()
    const yearStart = new Date(now.getFullYear(), 0, 1)
    const dayIndex = Math.floor((now - yearStart) / 86400000)
    return quotePool[dayIndex % quotePool.length]
  }, [language])

  const trackedDaysCount = useMemo(() => {
    return Object.keys(localStorage)
      .filter(key => key.startsWith(DAY_KEY_PREFIX))
      .reduce((count, key) => {
        try {
          const items = JSON.parse(localStorage.getItem(key) || '[]')
          return Array.isArray(items) && items.length > 0 ? count + 1 : count
        } catch { return count }
      }, 0)
  }, [entries, activeDayKey])

  const currentLanguageLabel = useMemo(() => {
    if(language === 'ru') return t('language_ru')
    if(language === 'uk') return t('language_uk')
    return t('language_en')
  }, [language])

  const profileGoalLabel = profile.goalType === 'other'
    ? (profile.customGoalText.trim() || t('weight_other'))
    : t(GOAL_CHOICES[profile.goalType]?.key || 'weight_maintain')

  useEffect(() => {
    if(profileNutrition && !localStorage.getItem(GOAL_KEY)){
      setGoal(profileNutrition.kcal)
    }
  }, [profileNutrition])

  useEffect(() => {
    function handleEsc(event){
      if(event.key === 'Escape'){
        setIsDiaryPanelOpen(false)
      }
    }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [])

  if(step === 1){
    return (
      <div className={`auth-screen page-${pageTransition}`}>
        <div className="auth-switcher-top">
          <button className={`lang-btn ${language === 'en' ? 'active' : ''}`} onClick={() => changeLanguage('en')}>ENG</button>
          <button className={`lang-btn ${language === 'ru' ? 'active' : ''}`} onClick={() => changeLanguage('ru')}>RU</button>
          <button className={`lang-btn ${language === 'uk' ? 'active' : ''}`} onClick={() => changeLanguage('uk')}>UA</button>
        </div>
        <div className="auth-card auth-card-login">
          <div className="auth-header auth-header-login">
            <h1>{t('welcome_back')}</h1>
            <p>{t('continue_tracking')}</p>
          </div>

          <form className="auth-form auth-form-login" onSubmit={e => { e.preventDefault(); attemptLogin() }}>
            <div className="field-row">
              <div>
                <label className="mini" htmlFor="login">{t('username_or_email')}</label>
                <input
                  type="text"
                  id="login"
                  placeholder={t('username_or_email')}
                  autoComplete="username"
                  value={auth.login}
                  onChange={e => setAuth(prev => ({ ...prev, login: e.target.value }))}
                  autoFocus
                />
              </div>
            </div>
            <div className="field-row">
              <div>
                <label className="mini" htmlFor="password">{t('password')}</label>
                <input
                  type="password"
                  id="password"
                  placeholder={t('password_placeholder')}
                  autoComplete="current-password"
                  value={auth.password}
                  onChange={e => setAuth(prev => ({ ...prev, password: e.target.value }))}
                />
              </div>
            </div>

            <button type="submit" className="btn-add btn-auth btn-login">{t('sign_in')}</button>
            <button
              type="button"
              className="back-to-login"
              onClick={() => {
                setAuth({ login: '', password: '', email: '', nickname: '' })
                setConfirmPassword('')
                animateStepChange(5)
              }}
            >
              {t('create_account')}
            </button>
          </form>
        </div>
      </div>
    )
  }

  if(step === 5){
    return (
      <div className={`auth-screen page-${pageTransition}`}>
        <div className="auth-switcher-top">
          <button className={`lang-btn ${language === 'en' ? 'active' : ''}`} onClick={() => changeLanguage('en')}>ENG</button>
          <button className={`lang-btn ${language === 'ru' ? 'active' : ''}`} onClick={() => changeLanguage('ru')}>RU</button>
          <button className={`lang-btn ${language === 'uk' ? 'active' : ''}`} onClick={() => changeLanguage('uk')}>UA</button>
        </div>
        <div className="auth-card auth-card-register">
          <div className="auth-header auth-header-register">
            <h1>{t('register_title')}</h1>
            <p>{t('register_desc')}</p>
          </div>

          <form className="auth-form auth-form-register" onSubmit={e => { e.preventDefault(); saveAuth() }}>
            <button type="button" className="google-btn">
              <span className="google-icon">G</span>
              {t('signup_google')}
            </button>
            <div className="separator"><span>{t('or')}</span></div>
            <div className="step-dots">
              <span className="dot active" />
              <span className="dot" />
              <span className="dot" />
            </div>

            <div className="section-title">{t('account_details')}</div>

            <div className="field-row">
              <div>
                <label className="mini" htmlFor="login">{t('login')}</label>
                <input
                  type="text"
                  id="login"
                  placeholder={t('username_placeholder')}
                  autoComplete="username"
                  value={auth.login}
                  onChange={e => setAuth(prev => ({ ...prev, login: e.target.value }))}
                  autoFocus
                />
              </div>
            </div>
            <div className="field-row">
              <div>
                <label className="mini" htmlFor="email">{t('email')}</label>
                <input
                  type="email"
                  id="email"
                  placeholder={t('email_placeholder')}
                  autoComplete="email"
                  value={auth.email}
                  onChange={e => setAuth(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>
            </div>
            <div className="field-row">
              <div>
                <label className="mini" htmlFor="password">{t('password')}</label>
                <div style={{ fontSize: '11px', color: 'var(--gray)', marginBottom: '6px' }}>
                  {t('password_hint')}
                </div>
                <input
                  type="password"
                  id="password"
                  placeholder={t('password_example')}
                  autoComplete="new-password"
                  value={auth.password}
                  onChange={e => setAuth(prev => ({ ...prev, password: e.target.value }))}
                  style={{
                    borderColor: auth.password && validatePassword(auth.password) ? 'var(--lime)' : auth.password ? '#ef4444' : 'rgba(16,185,129,0.2)',
                    boxShadow: auth.password && validatePassword(auth.password) ? '0 0 15px rgba(16,185,129,0.3)' : auth.password ? '0 0 15px rgba(239,68,68,0.3)' : 'none'
                  }}
                />
                {auth.password && !validatePassword(auth.password) && (
                  <div style={{ fontSize: '11px', color: '#ef4444', marginTop: '4px' }}>
                    ❌ {t('password_invalid_hint')}
                  </div>
                )}
                {auth.password && validatePassword(auth.password) && (
                  <div style={{ fontSize: '11px', color: 'var(--lime)', marginTop: '4px' }}>
                    ✓ {t('password_valid_hint')}
                  </div>
                )}
              </div>
            </div>
            <div className="field-row">
              <div>
                <label className="mini" htmlFor="confirmPassword">{t('confirm_password')}</label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder={t('password_placeholder')}
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>

            <button type="submit" className="btn-add btn-auth btn-register">{t('sign_up')}</button>
            <button
              type="button"
              className="back-to-login"
              onClick={() => {
                setConfirmPassword('')
                setAuth(prev => ({ ...prev, password: '' }))
                animateStepChange(1)
              }}
            >
              {t('have_account')}
            </button>
          </form>
        </div>
      </div>
    )
  }

  if(step === 2){
    return (
      <>
        <div className={`wrap page-${pageTransition}`}>
          <header className="top">
            <div className="header-left">
              <div className="brand"><span className="logo">NutriAI</span></div>
              <div className="date-badge">{t('hello')}, {auth.nickname || t('friend')}!</div>
            </div>
          </header>

          <div className="profile-card">
            <p className="panel-title">{t('set_parameters')}</p>
            <div className="add-card">
              <p className="manual-note">{t('params_note')}</p>
              <div className="params-grid">
              <div className="param-item">
                <label className="mini">{t('weight')}</label>
                <div className="unit-switch" role="group" aria-label="Weight unit">
                  <button type="button" className={`unit-btn ${profile.weightUnit === 'kg' ? 'active' : ''}`} onClick={() => setProfile(prev => ({ ...prev, weightUnit: 'kg' }))}>kg</button>
                  <button type="button" className={`unit-btn ${profile.weightUnit === 'lbs' ? 'active' : ''}`} onClick={() => setProfile(prev => ({ ...prev, weightUnit: 'lbs' }))}>lbs</button>
                </div>
                <div className="wheel-wrap">
                  <button type="button" className="wheel-trigger" onClick={() => openPicker('weight')}>
                    <span className="wheel-value">{getPickerDisplayValue('weight') || '—'}</span>
                    <span className="wheel-unit">{getPickerUnit('weight')}</span>
                  </button>
                </div>
              </div>
              <div className="param-item param-item--height-align">
                <label className="mini">{t('height')}</label>
                <div className="wheel-wrap">
                  <button type="button" className="wheel-trigger" onClick={() => openPicker('height')}>
                    <span className="wheel-value">{getPickerDisplayValue('height') || '—'}</span>
                    <span className="wheel-unit">{getPickerUnit('height')}</span>
                  </button>
                </div>
              </div>
              <div className="param-item">
                <label className="mini">{t('age')}</label>
                <div className="wheel-wrap">
                  <button type="button" className="wheel-trigger" onClick={() => openPicker('age')}>
                    <span className="wheel-value">{getPickerDisplayValue('age') || '—'}</span>
                    <span className="wheel-unit">{getPickerUnit('age')}</span>
                  </button>
                </div>
              </div>
              <div className="param-item">
                <label className="mini">{t('desired_weight')}</label>
                <div className="wheel-wrap">
                  <button type="button" className="wheel-trigger" onClick={() => openPicker('desiredWeight')}>
                    <span className="wheel-value">{getPickerDisplayValue('desiredWeight') || '—'}</span>
                    <span className="wheel-unit">{getPickerUnit('desiredWeight')}</span>
                  </button>
                </div>
              </div>
              <div className="param-item param-item--full">
                <label className="mini">{t('your_goal')}</label>
                <div className="goal-ios-picker" role="group" aria-label={t('your_goal')}>
                  {Object.entries(GOAL_CHOICES).map(([goalType, cfg]) => (
                    <button
                      key={goalType}
                      type="button"
                      className={`goal-ios-card ${profile.goalType === goalType ? 'active' : ''}`}
                      onClick={() => setProfile(prev => ({ ...prev, goalType }))}
                    >
                      <span className="goal-ios-icon" aria-hidden>{cfg.icon}</span>
                      <span className="goal-ios-text">{t(cfg.key)}</span>
                    </button>
                  ))}
                </div>
                {profile.goalType === 'other' && (
                  <div className="goal-other-wrap">
                    <input
                      type="text"
                      id="customGoal"
                      placeholder={t('weight_other_placeholder')}
                      value={profile.customGoalText}
                      onChange={e => setProfile(prev => ({ ...prev, customGoalText: e.target.value }))}
                    />
                  </div>
                )}
              </div>
            </div>
              {profileNutrition && (
                <div className="preview-line found">
                  {t('norm_kcal')}: {profileNutrition.kcal} {t('kcal')} · {formatMacroSummary(profileNutrition.protein, profileNutrition.carbs, profileNutrition.fat)}
                </div>
              )}
              <button className="btn-add" onClick={saveProfile}>{t('save_parameters')}</button>
            </div>
          </div>
        </div>
        {activePicker && (
          <div className="wheel-overlay" onClick={() => setActivePicker('')}>
            <div className="wheel-modal" onClick={e => e.stopPropagation()}>
              <div className="wheel-modal-title">{getPickerLabel(activePicker)}</div>
              <div className="wheel-modal-select-wrap">
                <div
                  id="pickerSelect"
                  ref={wheelListRef}
                  className="wheel-select wheel-select-list"
                  role="listbox"
                  aria-label={getPickerLabel(activePicker)}
                  tabIndex={0}
                  onScroll={handleWheelScroll}
                >
                  {getPickerOptions(activePicker).map(value => (
                    <button
                      key={value}
                      type="button"
                      data-wheel-value={value}
                      className={`wheel-option ${nearestWheelValue(pickerDraft, getPickerOptions(activePicker)) === value ? 'active' : ''}`}
                      onClick={() => {
                        setPickerDraft(value)
                        centerWheelValue(value)
                      }}
                    >
                      {value}
                    </button>
                  ))}
                </div>
                <span className="wheel-modal-unit">{getPickerUnit(activePicker)}</span>
              </div>
              <button type="button" className="btn-add wheel-confirm-btn" onClick={confirmPickerSelection}>{t('confirm_selection')}</button>
            </div>
          </div>
        )}
      </>
    )
  }

  if(step === 4){
    return (
      <>
        <div className={`wrap page-${pageTransition}`}>
          <div className="profile-screen">
            <div className="profile-screen__topbar">
              <h1 className="profile-screen__title">{t('profile')}</h1>
              <button className="profile-close-btn" type="button" onClick={() => animateStepChange(3)}>×</button>
            </div>

            <div className="profile-days-card">
              <div className="profile-days-label">{t('tracked_days_label')}</div>
              <div className="profile-days-value">{trackedDaysCount}</div>
            </div>

            <div className="profile-section">
              <div className="profile-section-title">{t('health_data_section')}</div>
              <div className="profile-setting-card">
                <button
                  type="button"
                  className="profile-setting-row profile-setting-row--btn"
                  onClick={() => openPicker('desiredWeight')}
                >
                  <div>
                    <div className="profile-setting-name">{t('desired_weight')}</div>
                    <div className="profile-setting-subtitle">{t('weight_goal_subtitle')}</div>
                  </div>
                  <div className="profile-setting-value">{desiredWeightSummaryDisplay} ›</div>
                </button>
                <button
                  type="button"
                  className="profile-setting-row profile-setting-row--btn"
                  onClick={() => openPicker('weight')}
                >
                  <div>
                    <div className="profile-setting-name">{t('weight')}</div>
                    <div className="profile-setting-subtitle">{weightSummaryDisplay}</div>
                  </div>
                  <div className="profile-setting-value">{t('change_btn')} ›</div>
                </button>
                <button
                  type="button"
                  className="profile-setting-row profile-setting-row--btn"
                  onClick={() => setShowGoalModal(true)}
                >
                  <div>
                    <div className="profile-setting-name">{t('your_goal')}</div>
                    <div className="profile-setting-subtitle">{profileGoalLabel}</div>
                  </div>
                  <div className="profile-setting-value">{effectiveGoal} {t('kcal')} ›</div>
                </button>
              </div>
            </div>

            <div className="profile-section">
              <div className="profile-section-title">{t('app_settings_section')}</div>
              <div className="profile-setting-card">
                <div className="profile-setting-row">
                  <div>
                    <div className="profile-setting-name">{t('metric_system_title')}</div>
                    <div className="profile-setting-subtitle">{t('metric_system_subtitle')}</div>
                  </div>
                  <label className="profile-toggle" aria-label={t('metric_system_title')}>
                    <input
                      type="checkbox"
                      checked={profile.weightUnit === 'kg'}
                      onChange={e => setProfile(prev => ({ ...prev, weightUnit: e.target.checked ? 'kg' : 'lbs' }))}
                    />
                    <span className="profile-toggle-slider" />
                  </label>
                </div>
                <div className="profile-setting-row">
                  <div>
                    <div className="profile-setting-name">{t('language_title')}</div>
                    <div className="profile-setting-subtitle">{t('language_subtitle')}</div>
                  </div>
                  <div className="profile-setting-value">{currentLanguageLabel}</div>
                </div>
                <div className="profile-language-group">
                  <button className={`lang-btn ${language === 'en' ? 'active' : ''}`} onClick={() => changeLanguage('en')}>ENG</button>
                  <button className={`lang-btn ${language === 'ru' ? 'active' : ''}`} onClick={() => changeLanguage('ru')}>RU</button>
                  <button className={`lang-btn ${language === 'uk' ? 'active' : ''}`} onClick={() => changeLanguage('uk')}>UA</button>
                </div>
              </div>
            </div>

            <button className="btn-add btn-danger" style={{ maxWidth:'min(480px,100%)', margin:'0 auto', display:'block' }} onClick={logoutAccount}>{t('logout_btn')}</button>
          </div>
        </div>
        {activePicker && (
          <div className="wheel-overlay" onClick={() => setActivePicker('')}>
            <div className="wheel-modal" onClick={e => e.stopPropagation()}>
              <div className="wheel-modal-title">{getPickerLabel(activePicker)}</div>
              <div className="wheel-modal-select-wrap">
                <div
                  id="pickerSelectProfile"
                  ref={wheelListRef}
                  className="wheel-select wheel-select-list"
                  role="listbox"
                  aria-label={getPickerLabel(activePicker)}
                  tabIndex={0}
                  onScroll={handleWheelScroll}
                >
                  {getPickerOptions(activePicker).map(value => (
                    <button
                      key={value}
                      type="button"
                      data-wheel-value={value}
                      className={`wheel-option ${nearestWheelValue(pickerDraft, getPickerOptions(activePicker)) === value ? 'active' : ''}`}
                      onClick={() => {
                        setPickerDraft(value)
                        centerWheelValue(value)
                      }}
                    >
                      {value}
                    </button>
                  ))}
                </div>
                <span className="wheel-modal-unit">{getPickerUnit(activePicker)}</span>
              </div>
              <button type="button" className="btn-add wheel-confirm-btn" onClick={confirmPickerSelection}>{t('confirm_selection')}</button>
            </div>
          </div>
        )}
        {showGoalModal && (
          <div className="wheel-overlay" onClick={() => setShowGoalModal(false)}>
            <div className="wheel-modal" onClick={e => e.stopPropagation()} style={{ justifyContent: 'flex-start', paddingTop: '40px' }}>
              <div className="wheel-modal-title">{t('your_goal')}</div>
              <div style={{ width: 'min(480px, 100%)', margin: '0 auto' }}>
                <div className="goal-ios-picker" style={{ marginBottom: '20px' }}>
                  {Object.entries(GOAL_CHOICES).map(([goalType, cfg]) => (
                    <button
                      key={goalType}
                      type="button"
                      className={`goal-ios-card ${profile.goalType === goalType ? 'active' : ''}`}
                      onClick={() => setProfile(prev => ({ ...prev, goalType }))}
                    >
                      <span className="goal-ios-icon" aria-hidden>{cfg.icon}</span>
                      <span className="goal-ios-text">{t(cfg.key)}</span>
                    </button>
                  ))}
                </div>
                {profile.goalType === 'other' && (
                  <div className="goal-other-wrap" style={{ marginBottom: '20px' }}>
                    <input
                      type="text"
                      placeholder={t('weight_other_placeholder')}
                      value={profile.customGoalText}
                      onChange={e => setProfile(prev => ({ ...prev, customGoalText: e.target.value }))}
                    />
                  </div>
                )}
                {profileNutrition && (
                  <div className="preview-line found" style={{ marginBottom: '16px', fontSize: '14px', textAlign: 'center' }}>
                    {t('norm_kcal')}: {profileNutrition.kcal} {t('kcal')} · {formatMacroSummary(profileNutrition.protein, profileNutrition.carbs, profileNutrition.fat)}
                  </div>
                )}
                <button
                  type="button"
                  className="btn-add wheel-confirm-btn"
                  style={{ width: '100%', marginTop: 0 }}
                  onClick={() => { saveProfileSilent(); setShowGoalModal(false) }}
                >
                  {t('confirm_selection')}
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    )
  }

  return (
    <div className={`wrap page-${pageTransition}`}>
      <header className="top">
        <div className="header-left">
          <div className="brand"><span className="logo">NutriAI</span></div>
          <div className="date-badge">{dateBadge}</div>
        </div>
        <div className="header-right">
          <button className="link-btn profile-link" type="button" onClick={() => animateStepChange(4)}>
            {t('profile')}
          </button>
        </div>
      </header>

      <div className="grid">
        {isDiaryPanelOpen && <div className="diary-overlay" onClick={() => setIsDiaryPanelOpen(false)} />}
        <div className={`diary-column ${isDiaryPanelOpen ? 'open' : ''}`}>
          <button className="diary-panel-close" type="button" onClick={() => { setIsDiaryPanelOpen(false); resetPhotoFlow() }}>×</button>
          {diaryPanelMode === 'add' && (
            <>
              <p className="panel-title">{t('add_meal')}</p>

              <div className="photo-scan-card">
                <input
                  type="file"
                  accept="image/*"
                  capture="environment"
                  ref={photoInputRef}
                  onChange={handlePhotoSelect}
                  style={{ display: 'none' }}
                />

                {photoStage === 'idle' && (
                  <div className="np-scan-idle">
                    <button
                      type="button"
                      className="np-tactile np-scan-camera-area"
                      onClick={() => photoInputRef.current && photoInputRef.current.click()}
                    >
                      <Camera size={34} color="#00C98D" strokeWidth={1.5} />
                    </button>
                    <div className="np-scan-title">{t('scan_food_photo_title')}</div>
                    <div className="np-scan-subtitle">{t('scan_food_photo_subtitle')}</div>
                    <button
                      type="button"
                      className="np-tactile np-scan-btn-primary"
                      onClick={() => photoInputRef.current && photoInputRef.current.click()}
                    >
                      <Camera size={18} /> {t('take_photo')}
                    </button>
                    <button
                      type="button"
                      className="np-tactile np-scan-btn-secondary"
                      onClick={() => photoInputRef.current && photoInputRef.current.click()}
                    >
                      <ImageIcon size={16} /> {t('choose_from_gallery')}
                    </button>
                  </div>
                )}

                {photoStage === 'error' && (
                  <>
                    <div className="photo-scan-error">{t('photo_scan_error')}</div>
                    <button type="button" className="photo-scan-retry" onClick={resetPhotoFlow}>{t('try_again')}</button>
                  </>
                )}

                {photoStage === 'scanning' && photoPreviewUrl && (
                  <div className="np-analyze-frame">
                    <img src={photoPreviewUrl} alt="" className="np-analyze-photo" />
                    <div className="np-analyze-overlay">
                      <div className="np-pulse-wrap">
                        <div className="np-pulse-bar" style={{ animationDelay: '0s' }} />
                        <div className="np-pulse-bar" style={{ animationDelay: '0.15s' }} />
                        <div className="np-pulse-bar" style={{ animationDelay: '0.3s' }} />
                      </div>
                      <div className="np-analyze-steps">
                        {[t('analyze_step_1'), t('analyze_step_2'), t('analyze_step_3'), t('analyze_step_4')].map((label, i) => (
                          <div key={label} className="np-analyze-step" style={{ opacity: i === scanAnalyzeStep ? 1 : i < scanAnalyzeStep ? 0.35 : 0.15 }}>
                            {i < scanAnalyzeStep ? '✓ ' : ''}{label}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {photoStage === 'result' && baseIngredients.length > 0 && (
                  <div className="np-result">
                    <div className="np-result-photo-wrap">
                      <img src={photoPreviewUrl} alt="" className="np-result-photo" />
                      <div className="np-result-photo-gradient" />
                      <button type="button" className="np-tactile np-result-close" onClick={resetPhotoFlow}><X size={17} /></button>
                      <div className="np-result-photo-info">
                        <div className="np-result-dish-name">{dishName}</div>
                        <div className="np-result-badges">
                          <span className="np-badge np-badge-accent">❤ {t('healthiness')} {healthScore}/10</span>
                          <span className="np-badge">{scaledIngredients.length} {t('ingredients_word')}</span>
                        </div>
                      </div>
                    </div>

                    <div className="np-stat-grid">
                      <div className="np-stat-card np-stat-editable">
                        <div className="np-stat-label">{t('grams_label')}</div>
                        <div className="np-stat-edit-row">
                          <input
                            type="number" inputMode="numeric" className="np-stat-input" value={weightText}
                            onFocus={() => { weightFocusedRef.current = true }}
                            onChange={handleWeightChange}
                            onBlur={handleWeightBlur}
                          />
                          <span className="np-stat-unit-inline">{t('grams_unit_short')}</span>
                          <Pencil size={11} className="np-edit-pencil" />
                        </div>
                      </div>
                      <div className="np-stat-card np-stat-accent">
                        <div className="np-stat-label">{t('kcal')}</div>
                        <div className="np-stat-value">{Math.round(photoTotals.kcal)}</div>
                      </div>
                      <div className="np-stat-card">
                        <div className="np-stat-label">{t('protein_label')}</div>
                        <div className="np-stat-value">{Math.round(photoTotals.protein * 10) / 10} {t('grams_unit_short')}</div>
                      </div>
                      <div className="np-stat-card">
                        <div className="np-stat-label">{t('fats_label')}</div>
                        <div className="np-stat-value">{Math.round(photoTotals.fat * 10) / 10} {t('grams_unit_short')}</div>
                      </div>
                      <div className="np-stat-card np-stat-wide">
                        <div className="np-stat-label">{t('carbs_label')}</div>
                        <div className="np-stat-value">{Math.round(photoTotals.carbs * 10) / 10} {t('grams_unit_short')}</div>
                      </div>
                    </div>

                    <div className="np-portion-card">
                      <div className="np-portion-top">
                        <span>{t('how_much_did_you_eat')}</span>
                        <span className="np-portion-value">{Math.round(photoTotals.grams)} {t('grams_unit_short')}</span>
                      </div>
                      <input
                        type="range" min="25" max="250" step="5" value={portion}
                        onChange={e => setPortion(Number(e.target.value))}
                        className="np-slider"
                      />
                      <div className="np-portion-scale">
                        <span>{t('less')}</span>
                        <span>{portion}%</span>
                        <span>{t('more')}</span>
                      </div>
                    </div>

                    <div className="np-ingredients-title">{t('ingredients')}</div>
                    <div className="np-ingredients-list">
                      {scaledIngredients.map(it => (
                        <div key={it.id} className="np-ingredient-row">
                          <div className="np-ingredient-info">
                            <div className="np-ingredient-name">{capitalize(it.name || '')}</div>
                            {editingIngredientId === it.id ? (
                              <input
                                type="number" autoFocus className="np-ingredient-edit-input"
                                value={Math.round(it.grams)}
                                onChange={e => updateIngredientGrams(it.id, Number(e.target.value) || 0)}
                                onBlur={() => setEditingIngredientId(null)}
                              />
                            ) : (
                              <div className="np-ingredient-macros">{Math.round(it.grams)}{t('grams_unit_short')} · {Math.round(it.kcal)} {t('kcal')}</div>
                            )}
                          </div>
                          <div className="np-ingredient-actions">
                            <button type="button" className="np-tactile np-icon-btn" onClick={() => setEditingIngredientId(it.id)}><Pencil size={13} /></button>
                            <button type="button" className="np-tactile np-icon-btn" onClick={() => deleteIngredient(it.id)}><Trash2 size={13} /></button>
                          </div>
                        </div>
                      ))}
                      <button type="button" className="np-tactile np-add-ingredient-btn" onClick={addIngredient}>
                        <Plus size={14} /> {t('add_ingredient')}
                      </button>
                    </div>

                    <div className="np-action-bar">
                      <button type="button" className="np-tactile np-action-primary" onClick={addPhotoResultToDiary}>{t('add_to_diary')}</button>
                      <button type="button" className="np-tactile np-action-icon" onClick={() => showScanToast(t('saved_toast'))}><Save size={17} /></button>
                      <button type="button" className="np-tactile np-action-icon" onClick={() => showScanToast(t('share_ready_toast'))}><Share2 size={17} /></button>
                    </div>
                  </div>
                )}

                {scanToast && (
                  <div className="np-toast"><Sparkles size={13} color="#00C98D" /> {scanToast}</div>
                )}
              </div>

              <div className="add-card">
                <div className="field-row">
                  <div>
                    <label className="mini" htmlFor="foodName">{t('product')}</label>
                    <input
                      type="text"
                      id="foodName"
                      placeholder={t('start_typing')}
                      autoComplete="off"
                      value={foodName}
                      onChange={e => setFoodName(e.target.value)}
                    />
                    {foodName.trim() && !foundFood && foodSuggestions.length > 0 && (
                      <div className="food-suggestions">
                        <div className="food-suggestions-title">{t('similar_foods')}</div>
                        <div className="food-suggestions-list">
                          {foodSuggestions.map(name => (
                            <button
                              key={name}
                              type="button"
                              className="food-suggestion-btn"
                              onClick={() => setFoodName(capitalize(name))}
                            >
                              {capitalize(name)}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="mini" htmlFor="foodGrams">{t('portion_g')}</label>
                    <input
                      type="number"
                      id="foodGrams"
                      min="0"
                      placeholder="100"
                      value={foodGrams}
                      onChange={e => setFoodGrams(e.target.value)}
                    />
                  </div>
                </div>
                <div className={`preview-line ${previewText.type}`}>{previewText.text}</div>
                <button className="btn-add" onClick={addEntry}>{t('add_to_diary')}</button>

                <div className={`manual-panel ${showManual ? 'show' : ''}`}>
                  <p className="manual-note">{t('manual_missing_note')}</p>
                  <div className="macro-row">
                    <div>
                      <label className="mini" htmlFor="manKcal">{t('kcal')}</label>
                      <input type="number" id="manKcal" min="0" placeholder="0" value={manualKcal} onChange={e => setManualKcal(e.target.value)} />
                    </div>
                    <div>
                      <label className="mini" htmlFor="manProtein">{t('protein_label')}, g</label>
                      <input type="number" id="manProtein" min="0" placeholder="0" value={manualProtein} onChange={e => setManualProtein(e.target.value)} />
                    </div>
                    <div>
                      <label className="mini" htmlFor="manCarbs">{t('carbs_label')}, g</label>
                      <input type="number" id="manCarbs" min="0" placeholder="0" value={manualCarbs} onChange={e => setManualCarbs(e.target.value)} />
                    </div>
                  </div>
                  <div className="field-row">
                    <div>
                      <label className="mini" htmlFor="manFat">{t('fats_label')}, g</label>
                      <input type="number" id="manFat" min="0" placeholder="0" value={manualFat} onChange={e => setManualFat(e.target.value)} />
                    </div>
                    <div className="remember-row">
                      <label className="mini remember-label">
                        <input type="checkbox" checked={rememberFood} onChange={e => setRememberFood(e.target.checked)} /> {t('remember_product')}
                      </label>
                    </div>
                  </div>
                  <button className="btn-add btn-manual" onClick={addManualEntry}>{t('add_portion')}</button>
                </div>
              </div>
            </>
          )}

          <p className="panel-title">{t('today_eaten_title')}</p>
          <ul className="log-list">
            {entries.map((item, idx) => (
              <li key={idx} className="log-item">
                <div className="log-item-left">
                  {item.photo && <img src={item.photo} alt="" className="log-item-thumb" />}
                  <div>
                    <div className="name">{item.name}</div>
                    {(item.protein || item.carbs || item.fat) && (
                      <div className="macros">
                        {item.protein ? `Б ${item.protein}г` : ''}
                        {item.carbs ? `${item.protein ? ' · ' : ''}У ${item.carbs}г` : ''}
                        {item.fat ? `${item.protein || item.carbs ? ' · ' : ''}Ж ${item.fat}г` : ''}
                      </div>
                    )}
                  </div>
                </div>
                <div className="right">
                  <span className="kcal">{item.kcal} {t('kcal')}</span>
                  <button className="del-btn" onClick={() => deleteEntry(idx)}>×</button>
                </div>
              </li>
            ))}
          </ul>
          {!entries.length && <div className="empty-state">{t('empty_state')}</div>}
        </div>

        <div className="facts">
          <div className="week-strip">
            {weekDates.map(d => {
              const key = d.toISOString().slice(0,10)
              const isSelected = key === activeDayKey
              const total = isSelected ? totals.kcal : weekTotals[key]
              const cls = !isSelected ? (total > effectiveGoal ? 'over' : 'under') : ''
              return (
                <div key={key} className={`day-cell${isSelected ? ' today' : ''}`} onClick={() => setActiveDay(new Date(d))}>
                  <div className="day-name">{weekdays[d.getDay()]}</div>
                  <div className="day-number">{d.getDate()}</div>
                  <div className={`day-kcal ${cls}`}>{isSelected ? (total > 0 ? total : <span className="day-dot" />) : total}</div>
                </div>
              )
            })}
          </div>

          <div className="goal-line">
            {isProfileMode ? (
              <span>{t('profile_goal')}: {profileNutrition.kcal} {t('kcal')}</span>
            ) : (
              <span>{t('goal_custom')} = <input type="number" id="goalInput" min="0" value={goal} onChange={e => setGoal(Number(e.target.value) || 0)} /> {t('kcal')}</span>
            )}
            {isProfileMode && <div className="goal-hint">{t('profile_goal_hint')}</div>}
          </div>

          <div className="ring-wrap">
            <svg viewBox="0 0 190 190">
              <circle className="ring-track" cx="95" cy="95" r="82"></circle>
              <circle className="ring-progress" cx="95" cy="95" r="82" strokeDasharray={RING_CIRC} strokeDashoffset={ringOffset} style={{ stroke: ringColor }} />
            </svg>
            <div className="ring-center">
              <div className="ring-kcal">{totals.kcal}</div>
              <div className="ring-label">{t('ring_label')}</div>
              <div className="ring-remaining">{effectiveGoal - totals.kcal >= 0 ? `${t('remaining')}: ${effectiveGoal - totals.kcal} ${t('kcal')}` : `${t('overage')}: ${Math.abs(effectiveGoal - totals.kcal)} ${t('kcal')}`}</div>
            </div>
          </div>

          <div className="macro-bars">
            <div className="macro-bar-row has-tip">
              <div className="macro-bar-top">
                <span><span className="macro-emoji">🌾</span>{t('carbs_label')}</span>
                <span className="val">{Math.round(totals.carbs)} / {targets.carbs} g</span>
              </div>
              <div className="macro-bar-track"><div className="macro-bar-fill" style={{ width: targets.carbs ? `${Math.min(100, totals.carbs / targets.carbs * 100)}%` : '0%', background: 'var(--lime)' }} /></div>
              <div className="macro-tip">{t('carbs_tip')}</div>
            </div>
            <div className="macro-bar-row has-tip">
              <div className="macro-bar-top">
                <span><span className="macro-emoji">🥩</span>{t('protein_label')}</span>
                <span className="val">{Math.round(totals.protein)} / {targets.protein} g</span>
              </div>
              <div className="macro-bar-track"><div className="macro-bar-fill" style={{ width: targets.protein ? `${Math.min(100, totals.protein / targets.protein * 100)}%` : '0%', background: 'var(--blue)' }} /></div>
              <div className="macro-tip">{t('protein_tip')}</div>
            </div>
            <div className="macro-bar-row has-tip">
              <div className="macro-bar-top">
                <span><span className="macro-emoji">🥑</span>{t('fats_label')}</span>
                <span className="val">{Math.round(totals.fat)} / {targets.fat} g</span>
              </div>
              <div className="macro-bar-track"><div className="macro-bar-fill" style={{ width: targets.fat ? `${Math.min(100, totals.fat / targets.fat * 100)}%` : '0%', background: 'var(--orange)' }} /></div>
              <div className="macro-tip">{t('fat_tip')}</div>
            </div>
          </div>

          <div className="bottom-row">
            <button className="added-pill added-pill-btn" type="button" onClick={() => openDiaryPanel('eaten')}>
              {t('today_eaten_title')}: {entries.length}
            </button>
            <button className="fab-add" type="button" onClick={() => openDiaryPanel('add')}>+</button>
          </div>

          <div className="motivation-quote" aria-live="polite">
            {motivationQuote}
          </div>

          <p className="footnote">{t('data_saved')}</p>
        </div>
      </div>

      <footer className="credit">{t('private_diary')}</footer>

      <PremiumPaywall
        open={showPaywall}
        onClose={() => setShowPaywall(false)}
        onSubscribe={handlePremiumSubscribe}
        scansUsed={freeScansUsed}
        scanLimit={FREE_SCAN_LIMIT}
      />
    </div>
  )
}
