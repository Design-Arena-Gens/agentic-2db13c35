import Head from 'next/head'
import { useState } from 'react'

const certifications = [
  {
    id: 'discovery',
    name: 'Discovery Apnea Diver',
    level: 'Découverte',
    color: 'ocean',
    icon: '🌊',
    ageMin: 12,
    prerequisites: 'Aucun',
    theoryHours: 2,
    practiceHours: 2,
    sessionsMin: 2,
    theoryTopics: [
      "Histoire de l'apnée",
      "Physique de base de la plongée",
      "Physiologie de base – Équilibrage – BO – LMC",
      "Techniques de respiration de base",
      "Équipement d'apnée",
      "Techniques de plongée",
      "Environnement marin",
      "Dangers et précautions de sécurité",
      "Pratique en binôme"
    ],
    practicalSkills: [
      "Apnée statique",
      "Natation",
      "Techniques d'équilibrage",
      "Respiration",
      "Technique de palmes",
      "Flottabilité",
      "Apnée dynamique",
      "Canard",
      "Exercices de compétences"
    ],
    performanceRequirements: {
      "Apnée statique": "60 secondes",
      "Apnée dynamique": "15 m",
      "Plongée en poids constant": "2 m"
    },
    examTheory: "20 questions (pas de minimum requis)",
    instructor: "Instructeur CMAS Apnée 1* minimum",
    ratio: "1:6 (1:8 avec assistant)"
  },
  {
    id: 'one-star',
    name: '1★ Apnea Diver',
    level: 'Niveau 1',
    color: 'emerald',
    icon: '⭐',
    ageMin: 14,
    prerequisites: 'Aucun',
    theoryHours: 8,
    practiceHours: 8,
    sessionsMin: 4,
    theoryTopics: [
      "Histoire de l'apnée",
      "Physique de base de la plongée",
      "Physiologie de base – Équilibrage – BO – LMC",
      "Techniques de respiration de base",
      "Équipement d'apnée",
      "Techniques de plongée",
      "Environnement marin",
      "Dangers et précautions de sécurité",
      "Pratique en binôme"
    ],
    practicalSkills: [
      "Apnée statique",
      "Natation",
      "Techniques d'équilibrage",
      "Respiration en tant qu'apnéiste",
      "Technique de palmes",
      "Flottabilité",
      "Apnée dynamique",
      "Canard",
      "Sessions d'apnée",
      "Plongées en poids constant",
      "Exercices de compétences"
    ],
    performanceRequirements: {
      "Apnée statique": "1:30 min",
      "Apnée dynamique": "30 m",
      "Plongée en poids constant": "10 m"
    },
    examTheory: "30 questions (70% minimum)",
    instructor: "Instructeur CMAS Apnée 1* minimum",
    ratio: "1:6 (1:8 avec assistant)"
  },
  {
    id: 'two-star',
    name: '2★ Apnea Diver',
    level: 'Niveau 2',
    color: 'purple',
    icon: '⭐⭐',
    ageMin: 16,
    prerequisites: 'CMAS 1★ Apnea Diver',
    theoryHours: 12,
    practiceHours: 12,
    sessionsMin: 6,
    theoryTopics: [
      "Physique avancée de la plongée",
      "Physiologie avancée – Réflexe d'immersion",
      "Techniques de respiration avancées",
      "Équipement d'apnée avancé",
      "Techniques de plongée avancées",
      "Planification de plongée",
      "Environnement marin avancé",
      "Gestion des urgences",
      "Pratique en binôme avancée"
    ],
    practicalSkills: [
      "Apnée statique avancée",
      "Techniques d'équilibrage avancées (Frenzel)",
      "Technique de palmes avancée",
      "Flottabilité négative",
      "Apnée dynamique avancée",
      "Canard avancé",
      "Plongées en poids constant profondes",
      "Sauvetage et premiers secours",
      "Exercices de compétences avancés"
    ],
    performanceRequirements: {
      "Apnée statique": "2:30 min",
      "Apnée dynamique": "50 m",
      "Plongée en poids constant": "20 m"
    },
    examTheory: "40 questions (75% minimum)",
    instructor: "Instructeur CMAS Apnée 2* minimum",
    ratio: "1:4 (1:6 avec assistant)"
  },
  {
    id: 'three-star',
    name: '3★ Apnea Diver',
    level: 'Niveau 3',
    color: 'orange',
    icon: '⭐⭐⭐',
    ageMin: 18,
    prerequisites: 'CMAS 2★ Apnea Diver + 50 plongées',
    theoryHours: 16,
    practiceHours: 16,
    sessionsMin: 8,
    theoryTopics: [
      "Physique experte de la plongée",
      "Physiologie experte – Blood shift",
      "Techniques de respiration expertes",
      "Équipement d'apnée spécialisé",
      "Techniques de plongée expertes",
      "Planification de plongée avancée",
      "Environnement marin expert",
      "Gestion des urgences avancée",
      "Leadership en plongée",
      "Techniques de compétition"
    ],
    practicalSkills: [
      "Apnée statique experte",
      "Techniques d'équilibrage expertes (Mouthfill)",
      "Technique de monopaume",
      "Flottabilité neutre profonde",
      "Apnée dynamique experte",
      "Plongées en poids constant très profondes",
      "Free Immersion",
      "Constant Weight No Fins",
      "Sauvetage profond",
      "Exercices de compétences experts"
    ],
    performanceRequirements: {
      "Apnée statique": "4:00 min",
      "Apnée dynamique": "75 m",
      "Plongée en poids constant": "30 m"
    },
    examTheory: "50 questions (80% minimum)",
    instructor: "Instructeur CMAS Apnée 3* minimum",
    ratio: "1:2 (1:4 avec assistant)"
  }
]

function CertificationCard({ cert, isExpanded, onToggle }) {
  const colorClasses = {
    ocean: {
      gradient: 'from-ocean-500 to-ocean-700',
      badge: 'badge-blue',
      border: 'border-ocean-400/30',
      text: 'text-ocean-300',
      bg: 'bg-ocean-500/20'
    },
    emerald: {
      gradient: 'from-emerald-500 to-emerald-700',
      badge: 'badge-green',
      border: 'border-emerald-400/30',
      text: 'text-emerald-300',
      bg: 'bg-emerald-500/20'
    },
    purple: {
      gradient: 'from-purple-500 to-purple-700',
      badge: 'badge-purple',
      border: 'border-purple-400/30',
      text: 'text-purple-300',
      bg: 'bg-purple-500/20'
    },
    orange: {
      gradient: 'from-orange-500 to-orange-700',
      badge: 'badge-orange',
      border: 'border-orange-400/30',
      text: 'text-orange-300',
      bg: 'bg-orange-500/20'
    }
  }

  const colors = colorClasses[cert.color]

  return (
    <div className={`card overflow-hidden transition-all duration-500 ${isExpanded ? 'ring-2 ring-white/30' : ''}`}>
      <div 
        className={`bg-gradient-to-r ${colors.gradient} px-6 py-5 cursor-pointer hover:opacity-90 transition-opacity`}
        onClick={onToggle}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-4xl animate-float">{cert.icon}</span>
            <div>
              <h2 className="text-2xl font-bold text-white text-shadow">{cert.name}</h2>
              <p className="text-white/80">{cert.level}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="badge bg-white/20 text-white border-white/30">
              {cert.ageMin}+ ans
            </span>
            <svg 
              className={`w-6 h-6 text-white transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <div className={`transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-6 space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className={`${colors.bg} rounded-xl p-4 text-center border ${colors.border}`}>
              <div className="text-3xl font-bold text-white">{cert.theoryHours}h</div>
              <div className={colors.text}>Théorie</div>
            </div>
            <div className={`${colors.bg} rounded-xl p-4 text-center border ${colors.border}`}>
              <div className="text-3xl font-bold text-white">{cert.practiceHours}h</div>
              <div className={colors.text}>Pratique</div>
            </div>
            <div className={`${colors.bg} rounded-xl p-4 text-center border ${colors.border}`}>
              <div className="text-3xl font-bold text-white">{cert.sessionsMin}</div>
              <div className={colors.text}>Sessions min</div>
            </div>
            <div className={`${colors.bg} rounded-xl p-4 text-center border ${colors.border}`}>
              <div className="text-xl font-bold text-white">{cert.ratio.split(' ')[0]}</div>
              <div className={colors.text}>Ratio</div>
            </div>
          </div>

          {/* Prerequisites */}
          <div className={`${colors.bg} rounded-xl p-4 border ${colors.border}`}>
            <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Prérequis
            </h3>
            <p className="text-white/80">{cert.prerequisites}</p>
          </div>

          {/* Performance Requirements */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Exigences de Performance
            </h3>
            <div className="grid gap-3 md:grid-cols-3">
              {Object.entries(cert.performanceRequirements).map(([key, value]) => (
                <div key={key} className={`${colors.bg} rounded-xl p-4 border ${colors.border}`}>
                  <div className="text-2xl font-bold text-white">{value}</div>
                  <div className={colors.text}>{key}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Theory Topics */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Sujets Théoriques
            </h3>
            <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
              {cert.theoryTopics.map((topic, index) => (
                <div key={index} className="flex items-center gap-2 text-white/80">
                  <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${colors.gradient}`}></span>
                  {topic}
                </div>
              ))}
            </div>
          </div>

          {/* Practical Skills */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Compétences Pratiques
            </h3>
            <div className="flex flex-wrap gap-2">
              {cert.practicalSkills.map((skill, index) => (
                <span key={index} className={`badge ${colors.badge}`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Exam & Instructor */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className={`${colors.bg} rounded-xl p-4 border ${colors.border}`}>
              <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Examen Théorique
              </h4>
              <p className="text-white/80">{cert.examTheory}</p>
            </div>
            <div className={`${colors.bg} rounded-xl p-4 border ${colors.border}`}>
              <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Instructeur Requis
              </h4>
              <p className="text-white/80">{cert.instructor}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const [expandedCard, setExpandedCard] = useState('discovery')

  return (
    <>
      <Head>
        <title>CMAS Apnea Diver - Certifications</title>
        <meta name="description" content="Guide complet des certifications CMAS pour plongeurs en apnée" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌊</text></svg>" />
      </Head>

      <main className="min-h-screen">
        {/* Decorative bubbles */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 w-4 h-4 bg-white/10 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-1/3 right-20 w-6 h-6 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/4 right-1/3 w-5 h-5 bg-white/10 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
          <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-white/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 py-12">
          {/* Header */}
          <header className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-ocean-400 to-deep-600 rounded-full mb-6 shadow-xl animate-float">
              <span className="text-5xl">🤿</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white text-shadow mb-4">
              CMAS Apnea Diver
            </h1>
            <p className="text-xl text-ocean-200 max-w-2xl mx-auto">
              Guide complet des certifications pour plongeurs en apnée
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <span className="badge badge-blue">🌊 Découverte</span>
              <span className="badge badge-green">⭐ Niveau 1</span>
              <span className="badge badge-purple">⭐⭐ Niveau 2</span>
              <span className="badge badge-orange">⭐⭐⭐ Niveau 3</span>
            </div>
          </header>

          {/* Certification Cards */}
          <div className="space-y-6">
            {certifications.map((cert) => (
              <CertificationCard
                key={cert.id}
                cert={cert}
                isExpanded={expandedCard === cert.id}
                onToggle={() => setExpandedCard(expandedCard === cert.id ? null : cert.id)}
              />
            ))}
          </div>

          {/* Footer */}
          <footer className="text-center mt-12 py-8 border-t border-white/10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-2xl">🏊‍♂️</span>
              <span className="text-white/60 text-sm">
                Confédération Mondiale des Activités Subaquatiques
              </span>
            </div>
            <p className="text-white/40 text-xs">
              Ce guide est fourni à titre informatif. Consultez votre fédération nationale pour les exigences spécifiques.
            </p>
          </footer>
        </div>
      </main>
    </>
  )
}
