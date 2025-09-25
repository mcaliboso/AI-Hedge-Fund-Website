import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Download, ExternalLink, TrendingUp, Users, Shield, Zap } from "lucide-react"

export default function ResearchPaper() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-xl font-bold text-foreground">AI Hedge Fund</h1>
              <div className="hidden md:flex space-x-6">
                <a href="#abstract" className="text-muted-foreground hover:text-foreground transition-colors">
                  Abstract
                </a>
                <a href="#methodology" className="text-muted-foreground hover:text-foreground transition-colors">
                  Methodology
                </a>
                <a href="#results" className="text-muted-foreground hover:text-foreground transition-colors">
                  Results
                </a>
                <a href="#references" className="text-muted-foreground hover:text-foreground transition-colors">
                  References
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" asChild>
                <a href="/ai-hedge-fund-paper.pdf" download>
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </a>
              </Button>
              <Button size="sm" asChild>
                <a
                  href="https://github.com/blakealmon/AI-Hedge-Fund-Driven-By-Multi-Agent-LLM-Based-Architecture"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Code
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <Badge variant="secondary" className="mb-4">
              Research Paper • 2025
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6 leading-tight">
            AI Hedge Fund Driven By Multi-Agent LLM-Based Architecture
          </h1>
          <p className="text-xl text-muted-foreground text-balance mb-8 leading-relaxed">
            A scalable, modular, and interpretable multi-agent architecture for equity portfolio construction that
            integrates a schema-constrained blackboard, structured debate, and a Black–Litterman optimizer.
          </p>

          {/* Authors */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {["Blake Almon¹", "Matthew Caliboso²", "Alex Kim³", "Rohan Raman¹", "Rohan Dutta⁴"].map(
                (author, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {author}
                  </Badge>
                ),
              )}
            </div>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Advised By: Mithil Srungarapu¹, Vasu Sharma³, Kevin Zhu¹, Sunishchal Dev⁴</p>
              <div className="flex flex-wrap justify-center gap-4 mt-2">
                <span>¹ Algoverse AI Research</span>
                <span>² Northeastern University</span>
                <span>³ UC Berkeley</span>
                <span>⁴ Meta FAIR</span>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="pt-6">
                <TrendingUp className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-accent">12.49%</div>
                <div className="text-sm text-muted-foreground">Portfolio Return</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">3.89</div>
                <div className="text-sm text-muted-foreground">Sharpe Ratio</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Zap className="w-8 h-8 text-chart-3 mx-auto mb-2" />
                <div className="text-2xl font-bold text-chart-3">2.41pp</div>
                <div className="text-sm text-muted-foreground">Outperformance</div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="/ai-hedge-fund-paper.pdf" download>
                Read Full Paper
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent" asChild>
              <a
                href="https://github.com/blakealmon/AI-Hedge-Fund-Driven-By-Multi-Agent-LLM-Based-Architecture"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                GitHub Repository
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Abstract Section */}
      <section id="abstract" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Abstract</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                We propose a scalable, modular, and interpretable multi-agent architecture for equity portfolio
                construction that integrates a schema-constrained blackboard, structured debate, and a Black–Litterman
                optimizer to achieve diversified, risk-aware allocations. Agents asynchronously exchange structured
                messages, negotiate tradeoffs, and dynamically rebalance portfolios, while classical technical
                indicators such as MACD and RSI serve as checkable features.
              </p>
              <Separator className="my-6" />
              <p className="text-lg leading-relaxed text-muted-foreground">
                We evaluate the architecture in a biweekly, 8-month study on S&P 500 constituents, demonstrating that
                structured agent collaboration combined with Bayesian portfolio blending improves performance. Our
                approach achieves a return of <strong className="text-accent">12.49%</strong>, outperforming the S&P 500
                benchmark of <strong className="text-foreground">10.08%</strong>, highlighting the effectiveness of
                interpretable, multi-agent portfolio construction.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">System Architecture</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-primary" />
                  Multi-Agent Collaboration
                </CardTitle>
                <CardDescription>Structured agent roles mirror institutional hedge fund operations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Analysts</h4>
                      <p className="text-sm text-muted-foreground">
                        Collect and process financial data from multiple sources
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Researchers</h4>
                      <p className="text-sm text-muted-foreground">
                        Engage in structured debates with bullish and bearish perspectives
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-chart-3 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Risk Managers</h4>
                      <p className="text-sm text-muted-foreground">Assess portfolio exposures and risk metrics</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-chart-4 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Execution Agents</h4>
                      <p className="text-sm text-muted-foreground">
                        Implement allocations with Black-Litterman optimization
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-accent" />
                  Blackboard Communication
                </CardTitle>
                <CardDescription>Schema-constrained messaging ensures transparency and auditability</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Structured Messages</h4>
                    <p className="text-sm text-muted-foreground">
                      All agent communication occurs through typed JSON records, avoiding the "telephone game" failure
                      mode
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Asynchronous Collaboration</h4>
                    <p className="text-sm text-muted-foreground">
                      Agents can post and read messages independently, enabling scalable coordination
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Auditable Trail</h4>
                    <p className="text-sm text-muted-foreground">
                      Complete forensic traceability from trades back to agent rationales and debate artifacts
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section id="methodology" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Methodology</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Data Sources</CardTitle>
                <CardDescription>Multi-dimensional data integration for comprehensive analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="font-medium">FinnHub</span>
                    <Badge variant="outline">News & Reports</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="font-medium">YFinance</span>
                    <Badge variant="outline">Historical Prices</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="font-medium">Reddit</span>
                    <Badge variant="outline">Sentiment Analysis</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="font-medium">SimFin</span>
                    <Badge variant="outline">Financial Filings</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="font-medium">Perplexity</span>
                    <Badge variant="outline">Macro News</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Black-Litterman Integration</CardTitle>
                <CardDescription>LLM-generated views incorporated into portfolio optimization</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <h4 className="font-semibold text-primary mb-2">View Mapping</h4>
                    <p className="text-sm">Agent decisions (BUY/SELL/HOLD) mapped to expected returns (+2%, 0%, -2%)</p>
                  </div>
                  <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                    <h4 className="font-semibold text-accent mb-2">Confidence Modeling</h4>
                    <p className="text-sm">Within-view dispersion used to calibrate confidence levels</p>
                  </div>
                  <div className="p-4 bg-chart-3/10 rounded-lg border border-chart-3/20">
                    <h4 className="font-semibold text-chart-3 mb-2">Risk-Aware Optimization</h4>
                    <p className="text-sm">Bayesian blending of market priors with agent views</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Experimental Setup</CardTitle>
              <CardDescription>8-month backtest on Fortune 500 companies with biweekly rebalancing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">500</div>
                  <div className="text-sm text-muted-foreground">Parallel Analysis Threads</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-2">8</div>
                  <div className="text-sm text-muted-foreground">Months Testing Period</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-chart-3 mb-2">Fortune 500</div>
                  <div className="text-sm text-muted-foreground">Investment Universe</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Results</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
                <CardDescription>8-month backtest results vs S&P 500 benchmark</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex justify-between items-center p-4 bg-accent/10 rounded-lg border border-accent/20">
                    <div>
                      <div className="text-sm text-muted-foreground">AI Portfolio Return</div>
                      <div className="text-2xl font-bold text-accent">12.49%</div>
                    </div>
                    <TrendingUp className="w-8 h-8 text-accent" />
                  </div>
                  <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                    <div>
                      <div className="text-sm text-muted-foreground">S&P 500 Benchmark</div>
                      <div className="text-2xl font-bold">10.08%</div>
                    </div>
                    <TrendingUp className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <div className="flex justify-between items-center p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <div>
                      <div className="text-sm text-muted-foreground">Outperformance</div>
                      <div className="text-2xl font-bold text-primary">+2.41pp</div>
                    </div>
                    <ArrowRight className="w-8 h-8 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Risk Metrics</CardTitle>
                <CardDescription>Risk-adjusted performance analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-center p-6 bg-primary/10 rounded-lg border border-primary/20">
                    <div className="text-sm text-muted-foreground mb-2">Final Sharpe Ratio</div>
                    <div className="text-4xl font-bold text-primary mb-2">3.89</div>
                    <div className="text-sm text-muted-foreground">Well above market norms</div>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="text-sm text-muted-foreground mb-2">Sharpe Ratio Range</div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">-5.26</span>
                      <span className="text-sm text-muted-foreground">to</span>
                      <span className="text-lg font-semibold">10.34</span>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">High volatility during backtest period</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Key Findings</CardTitle>
              <CardDescription>Insights from the multi-agent architecture evaluation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-accent">Advantages</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2"></div>
                      <span>Structured collaboration improves decision quality</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2"></div>
                      <span>Transparent and auditable decision process</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2"></div>
                      <span>Scalable analysis across large investment universe</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2"></div>
                      <span>Risk-aware portfolio construction</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-destructive">Limitations</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-destructive rounded-full mt-2"></div>
                      <span>Sensitivity to prompt design and calibration</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-destructive rounded-full mt-2"></div>
                      <span>Noisy confidence calibration challenges</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-destructive rounded-full mt-2"></div>
                      <span>Short-horizon risk estimation limitations</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-destructive rounded-full mt-2"></div>
                      <span>High operational costs from LLM queries</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* References */}
      <section id="references" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">References</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4 text-sm">
                <div className="p-4 bg-background rounded-lg">
                  <p>
                    <strong>
                      Chen, W., Su, Y., Zuo, J., Yang, C., Yuan, C., Qian, C., Chan, C.-M., Qin, Y., Lu, Y., Xie, R., et
                      al.
                    </strong>{" "}
                    (2023). Agentverse: Facilitating multi-agent collaboration and exploring emergent behaviors in
                    agents. <em>arXiv preprint arXiv:2308.10848</em>.
                  </p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <p>
                    <strong>
                      Hong, S., Zhuge, M., Chen, J., Zheng, X., Cheng, Y., Zhang, C., Wang, J., Wang, Z., Yau, S. K. S.,
                      Lin, Z., et al.
                    </strong>{" "}
                    (2024). MetaGPT: Meta programming for multi-agent collaboration.{" "}
                    <em>arXiv preprint arXiv:2308.00352</em>.
                  </p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <p>
                    <strong>Li, X., Zeng, Y., Xing, X., Xu, J., & Xu, X.</strong> (2025). HedgeAgents: A balanced-aware
                    multi-agent financial trading system.{" "}
                    <em>In Companion Proceedings of the ACM on Web Conference 2025</em> (pp. 296–305).
                  </p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <p>
                    <strong>Luo, Y., Liu, K., & Davis, D. N.</strong> (2002). A multi-agent decision support system for
                    stock trading. <em>IEEE Network, 16(1)</em>, 20–27.
                  </p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <p>
                    <strong>Reis, É. R.</strong> (2019). PROFTS: A multi-agent automated trading system{" "}
                    <em>(Doctoral dissertation)</em>. Universidade de São Paulo.
                  </p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <p>
                    <strong>Xiao, Y., Sun, E., Luo, D., & Wang, W.</strong> (2024). TradingAgents: Multi-agents LLM
                    financial trading framework. <em>arXiv preprint arXiv:2412.20138</em>.
                  </p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <p>
                    <strong>
                      Yu, Y., Yao, Z., Li, H., Deng, Z., Jiang, Y., Cao, Y., Chen, Z., Suchow, J., Cui, Z., Liu, R., et
                      al.
                    </strong>{" "}
                    (2024). FinCon: A synthesized LLM multi-agent system with conceptual verbal reinforcement for
                    enhanced financial decision making. <em>Advances in Neural Information Processing Systems, 37</em>,
                    137010–137045.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">AI Hedge Fund Research</h3>
            <p className="text-muted-foreground">Multi-Agent LLM-Based Architecture for Portfolio Construction</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <Button variant="outline" asChild>
              <a href="/ai-hedge-fund-paper.pdf" download>
                <Download className="w-4 h-4 mr-2" />
                Download Paper
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://github.com/blakealmon/AI-Hedge-Fund-Driven-By-Multi-Agent-LLM-Based-Architecture"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                GitHub Repository
              </a>
            </Button>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-sm text-muted-foreground">
            <p>© 2025 Algoverse AI Research. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
