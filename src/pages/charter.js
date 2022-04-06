import Layout from "../layouts";
import React from 'react'
import { Helmet } from "react-helmet";

const pageMetaTitle = 'eBPF Foundation Charter'
const pageMetaDescription = 'Charter of the eBPF Foundation'

const CharterPage = ({ location: {pathname} }) => {
  return <Layout path={pathname}>
    <div className="page-wrapper page-charter">
    <Helmet
        title={pageMetaTitle}

        meta={[
          {name: "keywords", content: "ebpf, bpf, charter, community"},
          {name: "type", property: "og:type", content: "website"},
          {name: "url", property: "og:url", content: "https://ebpf.io/charter/"},
          {name: "title", property: "og:title", content: pageMetaTitle},
          {name: "description", property: "og:description", content: pageMetaDescription},
          {name: "image", property: "og:image", content: 'https://ebpf.io' + require("../assets/ogimage.png")},
          {name: "twitter:card", content: "summary_large_image"},
          {name: "twitter:url", content: "https://ebpf.io/"},
          {name: "twitter:title", content: pageMetaTitle},
          {name: "twitter:description", content: pageMetaDescription},
          {name: "twitter:image", content: 'https://ebpf.io' + require("../assets/ogimage.png")},
        ]}
      />
      <h1 className="charter-title">The eBPF Foundation Charter</h1>
      <p className="charter-description">The Linux Foundation<br/>Effective June 6, 2021</p>
      <h2 className="charter-heading">1) Mission and Scope of the eBPF Foundation.</h2>
      <ol>
        <li>The purpose of the eBPF Foundation (the “Directed Fund”) is to raise, budget and spend
        funds in support of various open source, open data and/or open standards projects relating
        to eBPF technologies, including infrastructure and support initiatives related thereto
        (each project, a “Technical Project”). The governance of each Technical Project is as set
        forth in the applicable charter for each Technical Project.</li>
        <li>The Directed Fund supports the Technical Projects. Except with respect to the operation
        of the BSC (as defined below), the Directed Fund operates under the guidance of the
        Governing Board of the Directed Fund (the “Governing Board”) and The Linux
        Foundation (the “LF”) as may be consistent with The Linux Foundation’s tax-exempt
        status.</li>
        <li>The Governing Board manages the Directed Fund. The Directed Fund will also have
        working groups, councils, committees and similar bodies (collectively, “Committees”)
        that may be established by either the Governing Board or the BSC (as defined below).</li>
      </ol>
      <h2>2) Membership.</h2>
      <ol>
        <li>The Directed Fund will be composed of Platinum, Silver and Associate Members (each, a
        “Member” and, collectively, the “Members”) in Good Standing. All Members must be
        current corporate members of the LF (at any level) to participate in the Directed Fund as
        a member. All participants in the Directed Fund, enjoy the privileges and undertake the
        obligations described in this Charter, as from time to time amended with the approval of
        the LF. During the term of their membership, all members will comply with all such
        policies as the LF Board of Directors and/or the Directed Fund may adopt with notice to
        members.</li>
        <li> Platinum Members will be entitled to appoint a representative to the Governing Board
        and any Committee except for the BSC or Committees established by the BSC.</li>
        <li>Silver Members, acting as a class, will be entitled to annually elect one representative to
        the Governing Board for every five Silver Members, up to a maximum of three
        representatives, provided that there will always be at least one Silver Member
        representative, even if there are less than five Silver Members. The Governing Board
        determines the election process.</li>
        <li>The Associate Member category of membership is limited to Associate Members of The
        Linux Foundation. The Governing Board may set additional criteria for joining the
        Directed Fund as an Associate Member. If the Associate Member is a membership
        organization, Associate Membership in the Directed Fund does not confer any benefits or
        rights to the members of the Associate Member.</li>
        <li>Members will be entitled to:
          <ol>
            <li>participate in Directed Fund general meetings, initiatives, events and any other
            activities; and</li>
            <li>identify themselves as members of the eBPF Foundation supporting the eBPF
            Foundation community</li>
          </ol>
        </li>
      </ol>
      <h2>3) Governing Board</h2>
      <ol>
        <li>The Governing Board voting members will consist of:
          <ol>
            <li>one representative appointed by each Platinum Member; and
            </li>
            <li>the elected Silver Member representative or representatives.</li>
          </ol>
        </li>
        <li>Only one Member that is part of a group of Related Companies (as defined in Section 6)
        may appoint, or nominate for a membership class election, a representative on the
        Governing Board. No single Member, company or set of Related Companies will be
        entitled to: (i) appoint or nominate for Membership class election more than one
        representative for the Governing Board, or (ii) have more than two representatives on the
        Governing Board.</li>
        <li>Conduct of Meetings
          <ol>
            <li>Governing Board meetings will be limited to the Governing Board representatives,
            invited guests and LF staff.</li>
            <li>Governing Board meetings follow the requirements for quorum and voting outlined in
            this Charter. The Governing Board may decide whether to allow named
            representatives (one per Member per Governing Board and per Committee) to attend
            as an alternate.</li>
            <li>The Governing Board meetings will be private unless decided otherwise by the
            Governing Board. The Governing Board may invite guests to participate in
            consideration of specific Governing Board topics (but such guest may not participate
            in any vote on any matter before the Governing Board).</li>
          </ol>
        </li>
        <li>Officers
          <ol>
            <li>The officers (“Officers”) of the Directed Fund as of the first meeting of the
            Governing Board will be a Chairperson (“Chair”) and a Treasurer. Additional Officer
            positions may be created by the Governing Board.</li>
            <li>The Chair will preside over meetings of the Governing Board, manage any
            day-to-day operational decisions, and will submit minutes for Governing Board
            approval.</li>
            <li>The Treasurer will assist in the preparation of budgets for Governing Board approval,
            monitor expenses against the budget and authorize expenditures approved in the
            budget.</li>
          </ol>
        </li>
        <li>The Governing Board will be responsible for overall management of the Directed Fund,
        including:
          <ol>
            <li>create Committees of the Governing Board;</li>
            <li>approve a budget directing the use of funds raised by the Directed Fund from all
            sources of revenue;</li>
            <li>nominate and elect Officers of the Directed Fund;</li>
            <li>except for those matters that are the responsibility of the BSC, oversee all Directed
            Fund business matters and work with the LF on any legal matters that arise;</li>
            <li>adopt and maintain policies or rules and procedures for the Directed Fund (subject to
            LF approval);</li>
            <li>approve procedures for the nomination and election of any representative of the
            Silver Members to the Governing Board and any Officer or other positions created
            by the Governing Board; and</li>
            <li>vote on all decisions or matters coming before the Governing Board.</li>
          </ol>
        </li>
      </ol> 
      <h2>4) eBPF Steering Committee (“BSC”)</h2>
      <ol>
        <li>The role of the BSC is to facilitate communication and collaboration among the
        Technical Projects. The BSC will be responsible for:
          <ol>
            <li>coordinating collaboration among Technical Projects, including development of an
            overall technical vision for the community;</li>
            <li>making recommendations to the Governing Board of resource priorities for Technical
            Projects;</li>
            <li>defining the minimal requirements of eBPF runtime projects and “eBPF Projects”;</li>
            <li>communicating on behalf of the eBPF community;</li>
            <li>establishing and overseeing committees focused on driving the mission of the eBPF
            Foundation including eBPF community events;</li>
            <li>creating, maintaining and amending project lifecycle procedures and processes; and</li>
            <li>such other matters related to the technical role of the BSC as may be communicated
            to the BSC by the Governing Board.</li>
          </ol>
        </li>
        <li>The voting members of the BSC consist of:
        <ol>
          <li>Two representatives (the “Kernel Representatives”) from the group of eBPF Linux
          kernel maintainers (as specified in the maintainer file). The Kernel Representatives
          will not be employed by the same Company or by Related Companies.</li>
          <li>One representative (each a “eBPF Runtime Representative”) for each additional
          open-source eBPF runtime implementation. Each eBPF Runtime Representative will
          be nominated and elected by the applicable oversight body of each eBPF runtime,
          with nominations and elections subject to approval by the BSC. Nominees need to be
          active contributors to the applicable eBPF runtime.</li>
          <li>Up to two representatives (“Additional Project Representatives”) from additional
          open source projects that are important to the eBPF ecosystem, as determined by the
          BSC. Each Additional Project Representative need to be an active contributor to one
          of these additional projects. The Additional Project Representatives will not be
          employed by the same Company or by Related Companies. Each Additional Project
          Representative must be nominated and elected by the BSC.</li>
          <li>Up to three representatives with maintainer status (“Maintainer Representatives”) of
          major eBPF Foundation projects as approved by the BSC. Maintainer Representatives
          are nominated and elected by the applicable oversight body of each major eBPF
          Foundation project, with nominations and elections subject to approval by the BSC.
          No more than one Maintainer Representative may be employed by any one company
          or group of Related Companies.</li>
        </ol>
        </li>
      <p>There can be at most two representatives on the BSC employed by the same company or by
      Related Companies. While normally members will serve two-year terms, the BSC will set
      initial term length so as to stagger elections.</p>  
        <li>One representative of any Member may observe meetings of the BSC. Any committers
        from a Technical Project may observe meetings of the BSC. The BSC may change this at any
        point in time, including: (a) opening meetings to a broader community; (b) holding closed
        meetings; and (c) holding meetings open to the public.</li>
        <li>The BSC may approve a project lifecycle policy that will address the incubation, archival
        and other stages and requirements of Technical Projects.</li>
        <li>The BSC representatives will elect a chair to preside over meetings, ensure minutes are
        taken and drive the BSC agenda with input from the BSC representatives.</li>
      </ol>
      <h2>5) Voting</h2>
      <ol>
        <li>Quorum for Governing Board, BSC and other Committee meetings will require at least
        sixty percent of the voting representatives. If advance notice of the meeting has been
        given per normal means and timing, the Governing Board may continue to meet even if
        quorum is not met, but will be prevented from making any decisions at the meeting.</li>
        <li>Ideally decisions will be made based on consensus. If, however, any decision requires a
        vote to move forward, the representatives of the Governing Board, BSC or Committee, as
        applicable, will vote on a one vote per voting representative basis.</li>
        <li>Except as provided in Section 13.a. or elsewhere in this Charter, decisions by vote at a
        meeting will require a simple majority vote, provided quorum is met. Except as provided
        in Section 16.a. or elsewhere in this Charter, decisions by electronic vote without a
        meeting will require a majority of all voting representatives.</li>
        <li>In the event of a tied vote with respect to an action that cannot be resolved by the
        Governing Board, BSC or other Committee, the Chair (in the case of the Governing
        Board or BSC) or a Committee member (in the case other Committees) may refer the
        matter to the Governing Board or BSC in the case of a Committee or in the case of the
        Governing Board or the BSC, the LF for assistance in reaching a decision.</li>
      </ol> 
      <h2>6) Subsidiaries and Related Companies</h2>
      <ol>
        <li>Definitions:
        <ol>
          <li>“Subsidiaries” means any entity in which a Member owns, directly or indirectly, more
          than fifty percent of the voting securities or membership interests of the entity in
          question;</li>
          <li>“Related Company” means any entity which controls or is controlled by a Member or
          which, together with a Member, is under the common control of a third party, in each
          case where such control results from ownership, either directly or indirectly, of more
          than fifty percent of the voting securities or membership interests of the entity in
          question; and</li>
          <li>“Related Companies” are entities that are each a Related Company of a Member.</li>
        </ol>
        </li>
        <li>Only the legal entity which has executed a Participation Agreement and its Subsidiaries
        will be entitled to enjoy the rights and privileges of such Membership; provided,
        however, that such Member and its Subsidiaries will be treated together as a single
        Member.</li>
        <li>If a Member is itself a foundation, association, consortium, open source project,
        membership organization, user group or other entity that has members or sponsors, then
        the rights and privileges granted to such Member will extend only to the
        employee-representatives of such Member, and not to its members or sponsors, unless
        otherwise approved by the Governing Board in a specific case.</li>
        <li>Directed Fund Membership is non-transferable, non-salable and non-assignable, except a
        Member may transfer its current Membership benefits and obligations to a successor of
        substantially all of its business or assets, whether by merger, sale or otherwise; provided
        that the transferee agrees to be bound by this Charter and the Bylaws and policies
        required by LF membership.</li>
      </ol>
      <h2>7) Good Standing</h2>
      <ol>
        <li>The Linux Foundation’s Good Standing Policy is available at <a href="https://www.linuxfoundation.org/good-standing-policy" target="_blank" rel="noopener noreferrer">https://www.linuxfoundation.org/good-standing-policy</a> and will apply to Members of this Directed Fund.</li>
      </ol>
      <h2>8) Trademarks</h2>
      <ol>
        <li>Any trademarks relating to the Directed Fund or the Technical Projects<a href="#clarification-1"><sup>1</sup></a> , including
        without limitation any mark relating to any conformance program, must be transferred to
        and held by LF Projects, LLC or the Linux Foundation and available for use pursuant to
        LF Projects, LLC’s trademark usage policy, available at <a href="https://www.lfprojects.org/trademarks/" target="_blank" rel="noopener noreferrer">https://www.lfprojects.org/trademarks/</a>.</li>
      </ol>
      <h2>9) Antitrust Guidelines</h2>
      <ol>
        <li>All Members must abide by The Linux Foundation’s Antitrust Policy available at <a href="https://www.linuxfoundation.org/antitrust-policy/" target="_blank" rel="noopener noreferrer">https://www.linuxfoundation.org/antitrust-policy</a>.</li>
        <li>All Members must encourage open participation from any organization able to meet the
        membership requirements, regardless of competitive interests. Put another way, the
        Governing Board will not seek to exclude any member based on any criteria,
        requirements or reasons other than those that are reasonable and applied on a
        non-discriminatory basis to all members.</li>
      </ol> 
      <h2>10) Budget</h2>
      <ol>
        <li>The Governing Board will approve an annual budget and never commit to spend in
        excess of funds raised. The budget and the purposes to which it is applied must be
        consistent with both (a) the non-profit and tax-exempt mission of The Linux Foundation 
        and (b) the aggregate goals of the Technical Projects.</li>
        <li>The Linux Foundation will provide the Governing Board with regular reports of spend
        levels against the budget. Under no circumstances will The Linux Foundation have any
        expectation or obligation to undertake an action on behalf of the Directed Fund or
        otherwise related to the Directed Fund that is not covered in full by funds raised by the
        Directed Fund.</li>
        <li>In the event an unbudgeted or otherwise unfunded obligation arises related to the
        Directed Fund, The Linux Foundation will coordinate with the Governing Board to
        address gap funding requirements.</li>
      </ol>
      <h2>11) General & Administrative Expenses</h2>
      <ol>
        <li>The Linux Foundation will have custody of and final authority over the usage of any fees,
        funds and other cash receipts.</li>
        <li>A General & Administrative (G&A) fee will be applied by The Linux Foundation to
        funds raised to cover membership records, finance, accounting, and human resources
        operations. The G&A fee will be 9% of the Directed Fund’s first $1,000,000 of gross
        receipts each year and 6% of the Directed Fund’s gross receipts each year over
        $1,000,000.</li>
      </ol>
      <h2>12) General Rules and Operations.</h2>
      <p>The Directed Fund activities must:</p>
      <ol>
        <li>engage in the work of the project in a professional manner consistent with maintaining a
        cohesive community, while also maintaining the goodwill and esteem of The Linux
        Foundation in the open source community;</li>
        <li>respect the rights of all trademark owners, including any branding and usage guidelines;</li>
        <li>engage or coordinate with The Linux Foundation on all outreach, website and marketing
        activities regarding the Directed Fund or on behalf of any Technical Project that invoke
        or associate the name of any Technical Project or The Linux Foundation; and</li>
        <li>operate under such rules and procedures as may be approved by the Governing Board and
        confirmed by The Linux Foundation.</li>
      </ol>
      <h2>13) Amendments</h2>
      <ol>
        <li>This Charter may be amended by a 70% vote of the entire Governing Board and BSC,
        subject to approval by The Linux Foundation.</li>
      </ol>

      <p className="charter-clarification" id="clarification-1"><sup>1</sup> For clarity, a project that the BSC determines qualifies as a “eBPF Project” but that is not otherwise hosted or
      supported by the Linux Foundation is not required to transfer its trademark in order to qualify as a “eBPF Project”.</p>
    </div>
  </Layout>
}

export default CharterPage;
