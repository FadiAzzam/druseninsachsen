import React, { useEffect } from 'react'

import headImg from "../static/imgs/essa-mhmad-qOIP6cDKTzY-unsplash.jpg"

const About = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])
    return (
        <>
            <div className="bg-dark">
                <div className="container py-5">
                    <div className="row h-100 align-items-center py-5">
                        <div className="col-lg-6">
                            <h1 className="display-4 text-light">Über DRUSEN IN SACHSEN E. V.</h1>
                            <p className="lead text-muted mb-0 text-light">WER SIND WIR?</p>
                            <p className="font-italic text-muted mb-4">
                                Verein für menschliche und soziale Dienste, der Hilfe leistet. Verbesserung der Stabilität, Gesundheit und des Wohlbefindens derer, denen wir dienen, durch Interessenvertretung,
                                Akkulturation, Gemeinschaftsentwicklung und kulturelle Bewahrung. Bereitstellung von Kulturerbe- und Wohltätigkeitsarbeit in der lokalen drusischen Gemeinde.
                            </p>

                        </div>
                        <div className="col-lg-6 d-none d-lg-block"><img src={headImg} alt="" className="img-fluid" /></div>
                    </div>
                </div>
            </div>

            <div className="bg-white py-5">
                <div className="container py-5">
                    <div className="row align-items-top">
                        <div className="col-lg-4"><i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
                            <div className="row">
                                <div className='col-lg-12 m-h-100px'>
                                    <h2 className="font-weight-light">Unsere Geschichte</h2>
                                </div>
                                <div className='col-lg-12'>
                                    <p className="font-italic text-muted mb-4">
                                        2020 wurde unser Verein gegründet.
                                        Seit unserer Gründung widmet sich die Drusische Gemeinschaft in Sachsen/Dresden der Förderung des sozialen, kulturellen Erbes,
                                        der Wohltätigkeitsarbeit und die Zusammenarbeit für die Integration in das deutsche Gesellschaft
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                            <div className="row">
                                <div className='col-lg-12 m-h-100px'>
                                    <h2 className="font-weight-light">Drusische Gemeinschaft Ziele</h2>
                                </div>
                                <div className='col-lg-12'>
                                    <p className="font-italic text-muted mb-4">
                                        Förderung und Pflege des kulturellen und sozialen Erbes, der Werte und Traditionen der Drusen unter den Mitgliedern der drusischen Gemeinschaft in den Deutschland und der
                                        Europäischen Union durch verschiedene kulturelle und soziale Mittel und Aktivitäten
                                        Begrüßen und helfen Sie den neuen drusischen Migranten, Flüchtlingen und humanitären Einwanderern und gehen Sie auf ihre Siedlungsbedürfnisse ein
                                        Förderung von Wohlfahrts-, Sozial-, Bildungs- und Freizeitaktivitäten und Stärkung des Engagements in der europäischen Gesellschaft
                                        Setzen Sie sich für Regierungsbehörden und Dienstleister ein, um Gerechtigkeitsstrategien umzusetzen, um die Integration von Mitgliedern der drusischen Gemeinschaft
                                        in die Gesellschaft zu ermöglichen und sie bei der Ausübung religiöser Bräuche, Traditionen und Rituale zu unterstützen.
                                        Bereitstellung von Unterstützungs-, Informations-, Bildungs- und Gemeindeentwicklungsprogrammen für die Mitglieder der drusischen Gemeinschaft
                                        und andere in den Deutschland und der Europäischen Union
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4"><i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
                            <div className="row">
                                <div className='col-lg-12 m-h-100px'>
                                    <h2 className="font-weight-light">Mitgliedschaft in der drusischen Gemeinschaft</h2>
                                </div>
                                <div className='col-lg-12'>
                                    <p className="font-italic text-muted mb-4">
                                        Die Mitgliedschaft der DRUSEN IN SACHSEN E. V.
                                        steht Personen offen, die ein Interesse an der Ermutigung und Förderung der Drusengesellschaft und ihrer Ziele haben.
                                        Das DRUSEN IN SACHSEN E. V.-Mitglied hat Anspruch auf:
                                        Stimmen Sie auf DRUSEN IN SACHSEN E. V.-Mitgliederversammlungen ab
                                        Ernennung zum Mitglied des DRUSEN IN SACHSEN E. V.-Verwaltungsausschusses
                                        Erhalten Sie kostenlose Exemplare aller DRUSEN IN SACHSEN E. V.-Broschüren, Flyer und Einreichungen
                                        Profitieren Sie bei Bedarf von allen Arten von DRUSEN IN SACHSEN E. V.-Diensten
                                        Nehmen Sie an allen DRUSEN IN SACHSEN E. V.-Aktivitäten teil, sofern Sie berechtigt sind
                                        Die DRUSEN IN SACHSEN E. V. ist auf die Unterstützung ihrer Mitglieder und Spender angewiesen, um ihre Dienste und Aktivitäten aufrechtzuerhalten.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About